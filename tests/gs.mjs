import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
await p.setViewportSize({width:1440,height:900});await p.goto('http://127.0.0.1:4321/');
await p.locator('.project-disclosure summary').nth(1).click();await p.waitForTimeout(900);
await p.locator('#work').screenshot({path:'docs/gs.png'});await b.close();
