import fs from 'node:fs/promises';
import {projects} from '../src/data/portfolio.js';
// Same screenshot endpoint and parameters as the original portfolio.
await fs.mkdir('public/thumbnails',{recursive:true});
await Promise.all(projects.filter(p=>p.url).map(async p=>{
 const endpoint=`https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&embed=screenshot.url&waitForTimeout=8000`;
 const response=await fetch(endpoint,{signal:AbortSignal.timeout(45000)});
 if(!response.ok||!response.headers.get('content-type')?.startsWith('image/'))throw Error(`Screenshot failed: ${p.title}`);
 await fs.writeFile(`public/thumbnails/${p.slug}.png`,Buffer.from(await response.arrayBuffer()));
 console.log(`Saved ${p.title}`);
}));
