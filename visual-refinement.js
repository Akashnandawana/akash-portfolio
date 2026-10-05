(() => {
  const root = document.querySelector('.decision-route');
  if (!root) return;
  const svg = root.querySelector('svg');
  const path = svg.querySelector('path');
  const nodes = [...root.querySelectorAll('.route-point')];
  function draw() {
    const box = root.getBoundingClientRect();
    if (!box.width) return;
    svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);
    const points = nodes.map(node => {const r=node.getBoundingClientRect();return {x:r.left-box.left+r.width/2,y:r.top-box.top+r.height/2};});
    let d=`M ${points[0].x} ${points[0].y}`;
    points.slice(1).forEach((b,i)=>{
      const a=points[i];
      if(Math.abs(a.y-b.y)<5 || window.matchMedia('(max-width:600px)').matches) d+=` L ${b.x} ${b.y}`;
      else if(Math.abs(a.x-b.x)<5) {const edge=a.x>box.width/2?box.width-2:2; d+=` L ${edge} ${a.y} Q ${edge} ${(a.y+b.y)/2} ${edge} ${b.y} L ${b.x} ${b.y}`;}
      else d+=` C ${a.x} ${(a.y+b.y)/2} ${b.x} ${(a.y+b.y)/2} ${b.x} ${b.y}`;
    });
    path.setAttribute('d',d);
  }
  if ('ResizeObserver' in window) new ResizeObserver(draw).observe(root);
  window.addEventListener('resize',draw);
  if(document.fonts)document.fonts.ready.then(draw);
  draw();
  // Deep links open all disclosure ancestors before scrolling to the evidence.
  function reveal(hash) {
    if(!hash || hash==='#')return;
    const target=document.getElementById(hash.slice(1));
    if(!target)return;
    let current=target;
    while(current){if(current.tagName==='DETAILS')current.open=true;current=current.parentElement;}
    requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>reveal(a.hash)));
  window.addEventListener('hashchange',()=>reveal(location.hash));
  if(location.hash)reveal(location.hash);
})();

// Keep the experience summary beside the opening message so the first screen
// communicates breadth and BI progression without creating another full-width band.
(() => {
  const hero = document.getElementById('top');
  const experience = document.querySelector('.professional-strip');
  if (hero && experience && !hero.contains(experience)) {
    experience.classList.add('hero-experience');
    hero.append(experience);
  }
})();
