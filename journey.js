(() => {
  const section = document.getElementById('journey');
  if (!section) return;
  const map = section.querySelector('.experience-map');
  const nodes = [...section.querySelectorAll('.experience-node')];
  const paths = [...section.querySelectorAll('.experience-route path')];
  const chapters = [...section.querySelectorAll('.journey-chapter')];
  function drawRoute() {
    const bounds = map.getBoundingClientRect();
    const points = nodes.map(node => {
      const r = node.getBoundingClientRect();
      return {x:r.left-bounds.left+r.width/2,y:r.top-bounds.top+r.height/2};
    });
    if (!points.length) return;
    let d = `M ${points[0].x} ${points[0].y}`;
    const mobile = window.matchMedia('(max-width:850px)').matches;
    for (let i=1; i<points.length; i++) {
      const a=points[i-1], b=points[i];
      if (mobile || Math.abs(a.y-b.y)<3) {
        d += ` L ${b.x} ${b.y}`;
      } else {
        const edge=a.x>bounds.width/2?bounds.width-5:5;
        const radius=24;
        const dir=edge>a.x?1:-1;
        d += ` L ${edge-dir*radius} ${a.y} Q ${edge} ${a.y} ${edge} ${a.y+radius}`;
        d += ` L ${edge} ${b.y-radius} Q ${edge} ${b.y} ${edge-dir*radius} ${b.y} L ${b.x} ${b.y}`;
      }
    }
    paths.forEach(path=>path.setAttribute('d',d));
  }
  let frame;
  const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(drawRoute);};
  chapters.forEach(chapter=>chapter.addEventListener('toggle',()=>{
    if(chapter.open) chapters.forEach(other=>{if(other!==chapter)other.open=false;});
    schedule();
  }));
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(map);
  window.addEventListener('resize',schedule);
  if(document.fonts)document.fonts.ready.then(schedule);
  schedule();
})();
