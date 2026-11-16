import { chromium } from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();
for(const w of [1440,390]){await p.setViewportSize({width:w,height:600});await p.goto('http://127.0.0.1:4321/');await p.waitForTimeout(500);
console.log(w,JSON.stringify(await p.evaluate(()=>[...document.querySelectorAll('.lang-switch a,.header-contact')].map(e=>{const r=e.getBoundingClientRect();return [e.textContent.trim().slice(0,8),Math.round(r.top*10)/10,Math.round(r.bottom*10)/10]}))));}
await b.close();
