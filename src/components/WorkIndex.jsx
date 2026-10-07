import {useState} from 'react';
import {projects,categories} from '../data/portfolio';
export default function WorkIndex(){
 const [filter,setFilter]=useState('All');
 const enabled=projects.filter(p=>categories.find(c=>c.name===p.type)?.enabled);
 const visible=enabled.filter(p=>filter==='All'||p.type===filter);
 return <div>
  <div className="work-toolbar"><div className="filters" role="group" aria-label="Filter work by discipline">
   {categories.map(({name,enabled:active})=><button key={name} type="button" disabled={!active} aria-describedby={!active?'work-pause-note':undefined} aria-pressed={filter===name} onClick={()=>setFilter(name)}>{name}<span>{active?(name==='All'?enabled.length:enabled.filter(p=>p.type===name).length):'—'}</span></button>)}
  </div><span className="mono count" role="status">{visible.length} projects</span></div>
  <p id="work-pause-note" className="work-note mono">Design & Motion are being updated.</p>
  <div className="work-list">{visible.map(p=><article className="work-row" key={p.slug}>
   <details className="project-disclosure">
    <summary><span className="mono work-number">{String(enabled.indexOf(p)+1).padStart(2,'0')}</span>
     <span className="project-intro"><span className="mono work-type">{p.type} / {p.stack}</span><span className="project-title">{p.title}</span><span className="work-description">{p.description}</span><span className="project-toggle mono"><span className="when-closed">View project details</span><span className="when-open">Close project details</span></span></span><span className="row-arrow" aria-hidden="true">+</span>
    </summary>
    <div className="project-detail"><div><h3>About the project</h3><p>{p.detail}</p><a className="text-link" href={p.url} target="_blank" rel="noreferrer">Visit website <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="15" height="15" fill="currentColor"><path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"/></svg></span><span className="sr-only"> (opens in a new tab)</span></a></div><div><h3>Project focus</h3><ul>{p.focus.map(item=><li key={item}>{item}</li>)}</ul><p className="mono">{p.stack}</p></div></div>
   </details>
  </article>)}</div>
 </div>;
}
