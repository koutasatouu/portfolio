import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const browser=await chromium.launch({channel:'msedge',headless:true});
const context=await browser.newContext(); const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const results=[];
for(const width of [1440,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4321');await page.evaluate(()=>document.fonts.ready);
 await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(img=>{img.loading='eager';return img.decode()}))});
 await page.screenshot({path:`docs/preview-${width}.png`,fullPage:true});
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
 const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 results.push({width,overflow,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))});
}

for(const name of ['Design','Motion'])if(!await page.getByRole('button',{name}).isDisabled())throw Error(name+' should be disabled');
await page.getByRole('button',{name:'Web',exact:false}).click();
if(await page.locator('.work-row').count()!==6)throw Error('Web count failed');
await page.locator('.project-disclosure summary').first().focus();await page.keyboard.press('Enter');
if(!await page.locator('.project-disclosure').first().getAttribute('open').then(x=>x!==null))throw Error('Project keyboard disclosure failed');
if(!await page.getByRole('link',{name:'Visit website'}).first().isVisible())throw Error('Project link hidden');
const expanded=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
if(expanded.violations.length)throw Error('Expanded accessibility: '+JSON.stringify(expanded.violations));
await page.screenshot({path:'docs/project-detail-mobile.png',fullPage:true});
await page.locator('.experience-list summary').first().focus();await page.keyboard.press('Enter');
if(!await page.locator('.experience-list details').first().getAttribute('open').then(x=>x!==null))throw Error('Experience keyboard disclosure failed');
await page.locator('nav a[href="#about"]').click();
await page.waitForFunction(()=>document.activeElement?.id==='about');
if(await page.evaluate(()=>Math.abs(document.getElementById('about').getBoundingClientRect().top-30)>2))throw Error('Smooth scroll destination failed');
await page.emulateMedia({reducedMotion:'reduce'});
const motion=await page.evaluate(()=>({scroll:getComputedStyle(document.documentElement).scrollBehavior,transition:getComputedStyle(document.querySelector('.row-arrow')).transitionDuration}));
const nojs=await browser.newContext({javaScriptEnabled:false});const fallback=await nojs.newPage();await fallback.goto('http://127.0.0.1:4321');
const ssr=await fallback.locator('.work-row').count();
const report={results,errors,motion,ssr,interactions:'Disabled categories, six text-only projects, expanded details, keyboard disclosures, and smooth anchor scroll passed'};
fs.writeFileSync('docs/test-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();
if(errors.length||results.some(r=>r.overflow||r.violations.length)||ssr!==6)process.exit(1);


