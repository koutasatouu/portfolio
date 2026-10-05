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
    <div className="project-detail"><div><h3>About the project</h3><p>{p.detail}</p><a className="text-link" href={p.url} target="_blank" rel="noreferrer">Visit website <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div><div><h3>Project focus</h3><ul>{p.focus.map(item=><li key={item}>{item}</li>)}</ul><p className="mono">{p.stack}</p></div></div>
   </details>
  </article>)}</div>
 </div>;
}
