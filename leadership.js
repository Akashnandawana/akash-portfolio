(() => {
  const pillars = {
    commercial: ['Commercial strategy in practice','Commodity-cost analysis identified pressure on margin early, enabling timely pricing action that protected £400k in profit.','#pricing'],
    governance: ['Data governance in practice','A Sales KPI framework, business glossary, source-to-report lineage and role-based visibility establish a more consistent basis for management decisions.','#platform'],
    people: ['People leadership in practice','Developing analysts into subject-matter owners, alongside automation and delegation, helped reduce recurring workload by 40%.','#automation']
  };
  document.querySelectorAll('[data-pillar]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-pillar]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    const [title, description, href] = pillars[button.dataset.pillar];
    document.getElementById('pillar-proof-title').textContent = title;
    document.getElementById('pillar-proof-text').textContent = description;
    document.getElementById('pillar-proof-link').href = href;
  }));
  const steps = [
    ['Understand','What business problem are we solving?','Agree the business objective before deciding what to build.'],
    ['Identify the gap','What data, process, capability or visibility is missing?','Separate the business question from the first requested output.'],
    ['Prioritise','What should the team focus on first?','Sequence work by value, urgency, dependencies and delivery capacity.'],
    ['Build the framework','KPIs · Data requirements · Ownership · Business logic · Success measures · Governance','Create a shared basis for investigation, decisions and measurement.'],
    ['Create the roadmap','Structure the stages, responsibilities and dependencies for the BI/data team.','Make the next decision, owner and delivery milestone clear.'],
    ['Insight','Analyse the data, test assumptions and identify what matters.','Translate analysis into a business explanation.'],
    ['Scenario','What happens if we don’t? Model potential commercial outcomes.','Compare choices through revenue, margin, cost and risk.'],
    ['Solution','Define the product, process or data solution that addresses the problem.','Explain the recommendation and the trade-offs to management.'],
    ['Deliver','Give people clear ownership, support and a route to resolve dependencies.','Keep delivery connected to the intended business outcome.'],
    ['Measure','Compare the result with the agreed success measures.','Use the evidence to refine the solution and the next roadmap.']
  ];
  document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.step);
    document.querySelectorAll('[data-step]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    document.getElementById('roadmap-number').textContent = String(index + 1).padStart(2,'0');
    document.getElementById('roadmap-title').textContent = steps[index][0];
    document.getElementById('roadmap-question').textContent = steps[index][1];
    document.getElementById('roadmap-purpose').textContent = steps[index][2];
  }));
  function openTarget(hash) {
    if (!hash || hash === '#') return;
    const target = document.getElementById(hash.slice(1));
    if (target) { let el = target; while (el) { if (el.matches('details')) el.open = true; el = el.parentElement; } }
  }
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => openTarget(link.hash)));
  window.addEventListener('hashchange', () => openTarget(location.hash));
  openTarget(location.hash);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const formatter = new Intl.NumberFormat('en-GB');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const el = entry.target;
      const value = Number(el.dataset.count);
      const finalText = el.textContent;
      const decimal = !Number.isInteger(value);
      let started;
      const animate = time => {
        if (started === undefined) started = time;
        const progress = Math.min((time-started)/850,1);
        const current = value*(1-Math.pow(1-progress,3));
        el.textContent = el.dataset.prefix + (decimal ? current.toFixed(1) : formatter.format(Math.round(current))) + el.dataset.suffix;
        if (progress < 1) requestAnimationFrame(animate); else el.textContent = finalText;
      };
      requestAnimationFrame(animate);
    }), { threshold: 0.3 });
    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
  }
})();
