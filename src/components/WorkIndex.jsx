import {useState} from 'react';
import {projects,categories} from '../data/portfolio';
import {copy} from '../data/copy';
const preview=p=>p.image??`/thumbnails/${p.slug}.png`;
const Arrow=()=><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="15" height="15" fill="currentColor"><path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"/></svg>;
const Visit=({url,label})=><a className="text-link" href={url} target="_blank" rel="noreferrer">{label} <span aria-hidden="true"><Arrow/></span><span className="sr-only"> (↗)</span></a>;
export default function WorkIndex({lang='id'}){
 const c=copy[lang].work;
 const [filter,setFilter]=useState('All');
 const [animated,setAnimated]=useState(false);
 const enabled=projects.filter(p=>categories.find(x=>x.name===p.type)?.enabled);
 const visible=enabled.filter(p=>filter==='All'||p.type===filter);
 const paused=categories.some(x=>!x.enabled);
 // Several projects of one type (the websites) collapse into a single row; single projects stay on their own.
 const rows=[];
 for(const p of visible){
  const same=p.group?visible.filter(q=>q.group===p.group):[];
  if(same.length>1&&c.groups[p.group]){ if(!rows.some(r=>r.group===p.group)) rows.push({group:p.group,items:same,key:'g-'+p.group}); }
  else rows.push({project:p,key:p.slug});
 }
 return <div>
  <div className="work-toolbar"><div className="filters" role="group" aria-label={c.filterLabel}>
   {categories.map(({name,enabled:active})=><button key={name} type="button" disabled={!active} aria-describedby={!active?'work-pause-note':undefined} aria-pressed={filter===name} onClick={()=>{setAnimated(true);setFilter(name)}}>{c.categories[name]}<span>{active?(name==='All'?enabled.length:enabled.filter(p=>p.type===name).length):'—'}</span></button>)}
  </div><span className="mono count" role="status">{visible.length} {visible.length===1?c.entry:c.entries}</span></div>
  {paused&&<p id="work-pause-note" className="work-note mono">{c.pause}</p>}
  <div className="work-list" data-animate={animated?'':undefined}>{rows.map((r,idx)=>{
   const g=r.group?c.groups[r.group]:null;
   const blank=!r.group&&r.project.noImage;
   const first=r.group?r.items[0]:r.project;
   const t=r.project?r.project.t[lang]:null;
   const type=r.group?r.items[0].type:r.project.type;
   const title=g?g.title:t.title, desc=g?g.description:t.description;
   const stack=g?g.stack:(t.stack??r.project.stack);
   const label=!g&&t.kind?t.kind:c.categories[type];
   const study=!r.group&&!r.project.url&&!r.project.noImage;
   return <article className="work-row" key={r.key}>
   <details className="project-disclosure">
    <summary><span className="mono work-number">{String(idx+1).padStart(2,'0')}</span>
     <span className="project-intro"><span className="mono work-type">{label}{g?` · ${g.unit?`${r.items.length} ${g.unit}`:c.sites(r.items.length)}`:''} / {stack}</span><span className="project-title">{title}</span><span className="work-description">{desc}</span><span className="project-toggle mono"><span className="when-closed">{c.view}</span><span className="when-open">{c.close}</span></span></span>
     {blank?<span className="project-thumb is-blank mono" aria-hidden="true">{label}</span>:<span className="project-thumb" aria-hidden="true"><img src={preview(first)} alt="" width="1600" height="1000" loading="lazy" decoding="async"/></span>}
     <span className="row-arrow" aria-hidden="true">+</span>
    </summary>
    {g?<div className="project-detail">
     <p className="group-intro">{g.detail}</p>
     {g.gallery?<ul className="gallery">{r.items.map(p=>{const s=p.t[lang];return <li key={p.slug}>
      <img src={preview(p)} alt={s.alt} width="1000" height="1250" loading="lazy" decoding="async"/>
      <p className="mono">{s.title}</p><p>{s.description}</p>
     </li>})}</ul>:
     <ul className="site-list">{r.items.map(p=>{const s=p.t[lang];return <li key={p.slug}>
      <img src={preview(p)} alt="" width="1600" height="1000" loading="lazy" decoding="async"/>
      <div><h3>{s.title}</h3><p className="mono">{s.role} · {p.stack}</p><p>{s.description}</p>{p.url&&<Visit url={p.url} label={c.visit}/>}</div>
     </li>})}</ul>}
    </div>:<div className="project-detail">
     {!blank&&<figure className={study?'project-figure is-study':'project-figure'}><img src={preview(r.project)} alt={t.alt??`${t.title} — ${c.previewAlt}`} width="1600" height="1000" loading="lazy" decoding="async"/></figure>}
     <div><h3>{c.about}</h3><p>{t.detail}</p>{r.project.url&&<Visit url={r.project.url} label={c.visit}/>}</div>
     <div><h3>{c.focus}</h3><ul>{t.focus.map(item=><li key={item}>{item}</li>)}</ul><p className="mono">{t.role} · {stack}</p></div>
    </div>}
   </details>
  </article>})}</div>
 </div>;
}
