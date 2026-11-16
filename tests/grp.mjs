import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
await p.setViewportSize({width:1440,height:900});await p.goto('http://127.0.0.1:4321/');
await p.locator('#work').screenshot({path:'docs/grp-closed.png'});
await p.locator('.project-disclosure summary').first().click();
await p.locator('.site-list img').evaluateAll(async i=>{await Promise.all(i.map(x=>{x.loading='eager';return x.decode()}))});await p.waitForTimeout(300);
await p.locator('#work').screenshot({path:'docs/grp-open.png'});await b.close();
