import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
for(const w of [1440,390]){await p.setViewportSize({width:w,height:900});await p.goto('http://127.0.0.1:4321/');
await p.locator('.project-disclosure').evaluateAll(d=>d.forEach(x=>x.open=true));
await p.locator('.project-figure img').evaluateAll(async i=>{await Promise.all(i.map(x=>{x.loading='eager';return x.decode()}))});await p.waitForTimeout(400);
console.log(w,JSON.stringify(await p.evaluate(()=>[...document.querySelectorAll('.project-figure')].map(f=>{const i=f.querySelector('img').getBoundingClientRect(),r=f.getBoundingClientRect();return [Math.round(r.width),Math.round(r.height),Math.round(i.width),Math.round(i.height)]}))));
if(w===1440){await p.locator('.project-figure').nth(7).screenshot({path:'docs/fig-premiere.png'});await p.locator('.project-figure').nth(0).screenshot({path:'docs/fig-web.png'});await p.locator('.project-figure').nth(6).screenshot({path:'docs/fig-ai.png'});}}
await b.close();
