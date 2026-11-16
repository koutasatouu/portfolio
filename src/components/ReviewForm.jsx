import {useState} from 'react';
import {copy} from '../data/copy';
export default function ReviewForm({lang='id'}){
 const c=copy[lang].review;
 const [state,setState]=useState('idle');
 const url=import.meta.env.PUBLIC_TESTIMONIALS_API_URL;
 async function submit(e){
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  if(f.get('website')) return; // honeypot
  if(!url){setState('error');return;}
  setState('sending');
  try{
   await fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({name:f.get('name'),role:f.get('role')||'',company:f.get('company')||'',platform:'',handle:'',rating:Number(f.get('rating')),quote:f.get('quote'),approved:'Not Yet Approved'})});
   setState('done');e.currentTarget.reset();
  }catch{setState('error');}
 }
 if(state==='done') return <p className="form-status" role="status">{c.ok}</p>;
 return <form className="review-form" onSubmit={submit}>
  <label>{c.name}<input name="name" required maxLength="80" autoComplete="name"/></label>
  <div className="form-row"><label>{c.role}<input name="role" maxLength="80"/></label><label>{c.company}<input name="company" maxLength="80"/></label></div>
  <fieldset className="rating"><legend>{c.rating}</legend>{[1,2,3,4,5].map(n=><label key={n}><input type="radio" name="rating" value={n} defaultChecked={n===5} required/><span>{n}</span></label>)}</fieldset>
  <label>{c.quote}<textarea name="quote" required rows="5" maxLength="600"/></label>
  <label className="consent"><input type="checkbox" required/> {c.consent}</label>
  <input type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="hp"/>
  <button type="submit" disabled={state==='sending'}>{state==='sending'?c.sending:c.send}</button>
  {state==='error'&&<p className="form-status" role="alert">{c.err}</p>}
 </form>;
}
