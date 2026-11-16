import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.setViewportSize({width:1440,height:900});await p.goto('http://127.0.0.1:4321/');
const S=p.locator('.project-disclosure summary');const D=p.locator('.project-disclosure');
const opens=()=>D.evaluateAll(d=>d.map(x=>x.open));
await S.nth(0).click();
await p.waitForTimeout(120);const mid=await D.nth(0).evaluate(d=>Math.round(d.getBoundingClientRect().height));
await p.waitForTimeout(700);const full=await D.nth(0).evaluate(d=>Math.round(d.getBoundingClientRect().height));
console.log('open row1 mid/full',mid,full,JSON.stringify(await opens()));
await S.nth(1).click();await p.waitForTimeout(900);
console.log('after click row2',JSON.stringify(await opens()),'h0',await D.nth(0).evaluate(d=>Math.round(d.getBoundingClientRect().height)));
await S.nth(1).click();await p.waitForTimeout(700);console.log('after toggle row2 closed',JSON.stringify(await opens()));
await S.nth(0).focus();await p.keyboard.press('Enter');await p.waitForTimeout(700);console.log('keyboard',JSON.stringify(await opens()));
// quick double click during animation
await S.nth(0).click();await S.nth(0).click();await p.waitForTimeout(900);console.log('dbl',JSON.stringify(await opens()));
// experience accordion
const E=p.locator('.experience-list summary');await E.nth(0).click();await E.nth(1).click();await p.waitForTimeout(900);
console.log('exp',JSON.stringify(await p.locator('.experience-list details').evaluateAll(d=>d.map(x=>x.open))));
console.log('errors',JSON.stringify(errs));await b.close();
