// Fluid open/close for <details> in the work list and experience list.
// One item open at a time per list. Native <details> keeps working without JS.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const EASE = 'cubic-bezier(.23,1,.32,1)';
type State = { opening: boolean; anims: Animation[]; done: Promise<void> };
const states = new WeakMap<HTMLDetailsElement, State>();
const SELECTOR = '.project-disclosure, .experience-list details';

const stop = (d: HTMLDetailsElement) => {
  const s = states.get(d);
  if (!s) return;
  s.anims.forEach((a) => a.cancel());
  states.delete(d);
  d.style.overflow = '';
  delete d.dataset.closing;
};

function run(d: HTMLDetailsElement, opening: boolean): Promise<void> {
  const current = d.getBoundingClientRect().height;
  stop(d);
  d.style.overflow = 'hidden'; // contain child margins before measuring
  let start = current, end: number;
  if (opening) {
    const closedH = d.getBoundingClientRect().height;
    d.open = true;
    end = d.getBoundingClientRect().height;
    start = Math.min(current, closedH);
  } else {
    d.open = false;
    end = d.getBoundingClientRect().height;
    d.open = true;
  }
  if (!opening) d.dataset.closing = '';
  const dur = reduce.matches ? 0 : opening ? 440 : 320;
  const anims: Animation[] = [d.animate({ height: [`${start}px`, `${end}px`] }, { duration: dur, easing: EASE })];
  [...d.children].filter((c) => c.tagName !== 'SUMMARY').forEach((el) => {
    anims.push((el as HTMLElement).animate(
      opening ? { opacity: [0, 1], transform: ['translateY(-8px)', 'none'] } : { opacity: [1, 0] },
      { duration: opening ? dur * 0.9 : dur * 0.55, easing: EASE, fill: 'both' }
    ));
  });
  const done = anims[0].finished.then(() => {
    if (states.get(d)?.anims !== anims) return;
    if (!opening) d.open = false;
    stop(d);
  }).catch(() => {});
  states.set(d, { opening, anims, done });
  return done;
}

document.addEventListener('click', async (event) => {
  const summary = event.target instanceof Element ? event.target.closest('summary') : null;
  const d = summary?.parentElement;
  if (!summary || !(d instanceof HTMLDetailsElement) || !d.matches(SELECTOR)) return;
  event.preventDefault();
  const state = states.get(d);
  const opening = state ? !state.opening : !d.open;
  const jobs = [run(d, opening)];
  if (opening) {
    const scope = d.closest('.work-list, .experience-list');
    scope?.querySelectorAll<HTMLDetailsElement>('details').forEach((other) => {
      if (other !== d && (other.open || states.get(other)?.opening)) jobs.push(run(other, false));
    });
  }
  await Promise.all(jobs);
  if (opening && d.open) {
    const bar = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const top = summary.getBoundingClientRect().top;
    if (top < bar) window.scrollBy({ top: top - bar, behavior: reduce.matches ? 'auto' : 'smooth' });
  }
});
