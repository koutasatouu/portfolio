import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
await p.setViewportSize({width:1440,height:900});await p.goto('http://127.0.0.1:4321/');
await p.locator('.project-disclosure summary').nth(2).click();await p.waitForTimeout(1500);
console.log(JSON.stringify(await p.evaluate(()=>{const d=document.querySelectorAll('.project-disclosure')[2];const g=d.querySelector('.gallery');return {h:d.offsetHeight,sh:d.scrollHeight,ov:d.style.overflow,gh:g.offsetHeight,cap:[...g.querySelectorAll('p')].map(x=>Math.round(x.getBoundingClientRect().bottom-d.getBoundingClientRect().top)),dbottom:Math.round(d.getBoundingClientRect().height)}})));
await b.close();
