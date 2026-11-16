import {useEffect,useState} from 'react';
import {copy} from '../data/copy';
const ok=v=>v===undefined||v===''||/^(approved|yes|true)$/i.test(String(v).trim());
export default function Testimonials({lang='id'}){
 const c=copy[lang];
 const [items,setItems]=useState([]);
 useEffect(()=>{
  const url=import.meta.env.PUBLIC_TESTIMONIALS_API_URL;
  if(!url) return;
  const ctl=new AbortController();
  fetch(url,{signal:ctl.signal}).then(r=>{if(!r.ok) throw new Error();return r.json();}).then(d=>{
   if(!Array.isArray(d)) return;
   setItems(d.filter(x=>x&&x.quote&&ok(x.approved)).map(x=>({name:String(x.name||''),role:[x.role,x.company].filter(Boolean).join(' · '),quote:String(x.quote),rating:Math.min(5,Math.max(1,parseInt(x.rating)||5))})));
  }).catch(()=>{});
  return()=>ctl.abort();
 },[]);
 if(!items.length) return null;
 return <section id="testimonials" className="section shell" aria-labelledby="testimonials-title">
  <div className="section-heading"><p className="eyebrow">{c.testimonials.eyebrow}</p><div><h2 id="testimonials-title">{c.testimonials.title}</h2></div></div>
  <ul className="testimonials">{items.map((t,i)=><li key={i}>
   <blockquote><p>{t.quote}</p></blockquote>
   <p className="mono testimonial-meta"><span className="sr-only">{c.review.stars(t.rating)} · </span><span aria-hidden="true">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</span> · <strong>{t.name}</strong>{t.role&&`, ${t.role}`}</p>
  </li>)}</ul>
  <a className="text-link" href={c.review.path}>{c.testimonials.write}</a>
 </section>;
}
