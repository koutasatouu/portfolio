import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
const errs=[];p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,120))});p.on('pageerror',e=>errs.push(e.message));
await p.setViewportSize({width:1440,height:900});await p.goto('http://127.0.0.1:4321/');
await p.waitForTimeout(3500);
const n=await p.locator('#testimonials li').count();console.log('reviews shown',n,'errors',JSON.stringify(errs));
if(n){await p.locator('#testimonials').screenshot({path:'docs/reviews.png'});}
await b.close();
