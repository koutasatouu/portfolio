import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
for(const w of [390]){await p.setViewportSize({width:w,height:900});await p.goto('http://127.0.0.1:4321/');await p.waitForTimeout(800);
const r=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,iw:innerWidth,bw:document.body.scrollWidth,els:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>window.innerWidth-0.5).map(e=>e.tagName+'.'+(e.className||'')+' <'+e.parentElement.tagName+'.'+e.parentElement.className+'> '+(e.textContent||'').slice(0,25)+' r='+Math.round(e.getBoundingClientRect().right)+' w='+Math.round(e.getBoundingClientRect().width)).slice(0,12)}));console.log(w,JSON.stringify(r,null,1));}
await b.close();
