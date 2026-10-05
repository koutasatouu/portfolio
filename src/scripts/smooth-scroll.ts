// Smooth anchor travel only. Wheel/touch scrolling stays native and interruptible.
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
let frame = 0;
let running = false;
const cancel = () => {
 cancelAnimationFrame(frame);
 if (running) document.documentElement.style.removeProperty('scroll-behavior');
 running = false;
};
window.addEventListener('wheel',cancel,{passive:true});
window.addEventListener('touchstart',cancel,{passive:true});
window.addEventListener('keydown',cancel);
preference.addEventListener('change',cancel);
document.addEventListener('click',(event)=>{
 const link=event.target instanceof Element?event.target.closest<HTMLAnchorElement>('a[href^="#"]'):null;
 if(!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)return;
 const hash=link.getAttribute('href');
 const target=hash?document.getElementById(hash.slice(1)):null;
 if(!target)return;
 event.preventDefault();cancel();
 const start=window.scrollY;
 const end=Math.min(Math.max(0,target.getBoundingClientRect().top+start-30),document.documentElement.scrollHeight-window.innerHeight);
 const finish=()=>{
  running=false;document.documentElement.style.removeProperty('scroll-behavior');
  if(location.hash!==hash)history.pushState(null,'',hash);
  if(!target.hasAttribute('tabindex')){target.setAttribute('tabindex','-1');target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true});}
  target.focus({preventScroll:true});
 };
 if(preference.matches){window.scrollTo({top:end,behavior:'instant'});finish();return;}
 const duration=Math.min(800,Math.max(420,Math.abs(end-start)*.22));
 const began=performance.now();running=true;
 document.documentElement.style.scrollBehavior='auto';
 const tick=(now:number)=>{
  const progress=Math.min(1,(now-began)/duration);
  const eased=1-Math.pow(1-progress,4);
  window.scrollTo(0,start+(end-start)*eased);
  if(progress<1)frame=requestAnimationFrame(tick);else finish();
 };
 frame=requestAnimationFrame(tick);
});
