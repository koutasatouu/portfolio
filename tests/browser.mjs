import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const browser=await chromium.launch({channel:'msedge',headless:true});
const context=await browser.newContext(); const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const results=[];
const B='http://127.0.0.1:4321';
for(const [path,tag] of [['/','id'],['/en/','en'],['/ulasan/','id-review']])for(const width of [1440,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(B+path);await page.evaluate(()=>document.fonts.ready);
 await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(img=>{img.loading='eager';return img.decode()}))});
 await page.screenshot({path:`docs/preview-${tag}-${width}.png`,fullPage:true});
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
 const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 results.push({path,width,overflow,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))});
}

await page.goto(B+'/');
const wa=await page.locator('a[href^="https://wa.me/"]').count();
const bar=await page.evaluate(()=>{window.scrollTo(0,2000);return getComputedStyle(document.querySelector('.site-bar')).position+':'+Math.round(document.querySelector('.site-bar').getBoundingClientRect().top)});if(bar!=='sticky:0')throw Error('Sticky bar failed '+bar);await page.evaluate(()=>window.scrollTo(0,0));
if(wa<6)throw Error('WhatsApp links missing: '+wa);
if(await page.locator('.package').count()!==3)throw Error('Package count');
for(const name of ['Desain','Motion'])if(await page.getByRole('button',{name}).isDisabled())throw Error(name+' should be enabled');
await page.getByRole('button',{name:'Web',exact:false}).click();
if(await page.locator('.work-row').count()!==2)throw Error('Web rows failed');
await page.locator('.project-disclosure summary').first().focus();await page.keyboard.press('Enter');
if(!await page.locator('.project-disclosure').first().getAttribute('open').then(x=>x!==null))throw Error('Project keyboard disclosure failed');
if(await page.locator('.site-list li').count()!==6)throw Error('Site list count');if(!await page.getByRole('link',{name:'Buka situs'}).first().isVisible())throw Error('Project link hidden');
await page.waitForTimeout(800);
const expanded=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
if(expanded.violations.length)throw Error('Expanded accessibility: '+JSON.stringify(expanded.violations));
await page.screenshot({path:'docs/project-detail-mobile.png',fullPage:true});
await page.locator('.experience-list summary').first().focus();await page.keyboard.press('Enter');
if(!await page.locator('.experience-list details').first().getAttribute('open').then(x=>x!==null))throw Error('Experience keyboard disclosure failed');
await page.locator('nav a[href="#about"]').click();
await page.waitForFunction(()=>document.activeElement?.id==='about');
if(await page.evaluate(()=>Math.abs(document.getElementById('about').getBoundingClientRect().top-parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop))>2))throw Error('Smooth scroll destination failed');
await page.emulateMedia({reducedMotion:'reduce'});
const motion=await page.evaluate(()=>({scroll:getComputedStyle(document.documentElement).scrollBehavior,transition:getComputedStyle(document.querySelector('.row-arrow')).transitionDuration}));
const nojs=await browser.newContext({javaScriptEnabled:false});const fallback=await nojs.newPage();await fallback.goto(B+'/');
const ssr=await fallback.locator('.work-row').count();
const report={results,errors,motion,ssr,interactions:'Disabled categories, six text-only projects, expanded details, keyboard disclosures, and smooth anchor scroll passed'};
fs.writeFileSync('docs/test-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();
if(errors.length||results.some(r=>r.overflow||r.violations.length)||ssr!==5)process.exit(1);


