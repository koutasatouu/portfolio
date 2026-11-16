import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
await p.setViewportSize({width:1440,height:900});await p.goto('http://127.0.0.1:4321/');
const D=p.locator('.experience-list details').first();
const m=()=>p.evaluate(()=>{const d=document.querySelector('.experience-list details');const n=d.nextElementSibling;return [Math.round(d.getBoundingClientRect().height),n?Math.round(n.getBoundingClientRect().top-d.getBoundingClientRect().top):null]});
await p.locator('.experience-list summary').first().click();
const samples=[];for(let i=0;i<9;i++){samples.push(await m());await p.waitForTimeout(60);}
await p.waitForTimeout(500);const end=await m();
console.log('opening',JSON.stringify(samples),'end',JSON.stringify(end));
await p.locator('.experience-list summary').first().click();
const c=[];for(let i=0;i<7;i++){c.push(await m());await p.waitForTimeout(50);}await p.waitForTimeout(500);console.log('closing',JSON.stringify(c),JSON.stringify(await m()));await b.close();
