import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
for(const w of [1440,390]){await p.setViewportSize({width:w,height:900});await p.goto('http://127.0.0.1:4321/');
await p.locator('.project-disclosure summary').nth(2).click();await p.waitForTimeout(900);
await p.locator('.gallery img').evaluateAll(async i=>{await Promise.all(i.map(x=>{x.loading='eager';return x.decode()}))});await p.waitForTimeout(200);
await p.locator('.work-row').nth(2).screenshot({path:`docs/feed-${w}.png`});}
await b.close();
