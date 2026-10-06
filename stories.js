'use strict';
(() => {
  const $ = (selector) => document.querySelector(selector);
  const all = (selector) => [...document.querySelectorAll(selector)];
  const put = (id, value) => { document.getElementById(id).textContent = value; };
  // Every commercial figure is carried forward from the existing portfolio.
  // The network is a conceptual relationship map, not a quantitative chart.
  const stories = {
    management: {
      category: 'BI / Data transformation', question: 'How do you modernise BI without losing trust?', value: '15+', unit: 'business areas supported',
      scope: 'Qlik Sense to Power BI · Roadmap · UAT · Business sign-off', evidence: 'management',
      nodes: ['Commercial', 'Finance', 'Supply Chain', 'Operations', 'Management decisions'],
      stages: [
        ['The challenge', 'Change the platform. Keep confidence in the numbers.', 'Management BI needed to modernise across multiple business areas while maintaining confidence in reported information.', 'The leadership question', 'How can business owners trust the new reporting as delivery moves forward?', 'Modernise BI', 'Keep trust.', 'Business confidence'],
        ['The gap', 'Trust needed to be designed into delivery.', 'I treated ownership, shared definitions and business validation as essential parts of the transition.', 'What needed to connect', 'The reporting logic, delivery team and business owners needed one governed route to acceptance.', 'The missing link', 'Shared meaning.', 'Definitions + ownership'],
        ['My approach', 'Make validation part of the roadmap.', 'I directed the Qlik Sense to Power BI transition through a delivery roadmap, testing, issue ownership and business sign-off.', 'My contribution', 'I supported adoption through shared terminology, data literacy and reusable models, connecting technical delivery with business understanding.', 'Build the framework', 'Validate together.', 'Roadmap + UAT + sign-off'],
        ['The outcome', 'Modernisation with the business involved.', 'The transformation supported 15+ business areas, with validation and ownership built into the delivery approach.', 'Why it matters', 'Management BI is a business change programme: the platform, the definitions and the people all need to move together.', 'Business impact', '15+ areas.', 'Trusted decision support']
      ]
    },
    pricing: {
      category: 'Pricing & margin', question: 'When costs move, how quickly can pricing respond?', value: '£400k', unit: 'profit protected',
      scope: '5,000+ SKUs · Cost-change visibility · Pricing decisions', evidence: 'pricing',
      nodes: ['Materials', 'Labour', 'Overheads', 'Selling price', 'Margin decision'],
      stages: [
        ['The challenge', 'Changing costs can put margin under pressure.', 'Pricing decisions needed a clearer view of product costs and their commercial implications across a large SKU portfolio.', 'The leadership question', 'How do we make a changing cost visible early enough for the business to act?', 'Commercial priority', 'Protect margin.', 'Cost visibility'],
        ['The gap', 'Focus on the products exposed to changing costs.', 'I connected material, labour and overhead movements to product-level margin so the analysis could support pricing action.', 'The missing connection', 'Cost data becomes useful when commercial teams can see which products need attention.', 'Connect the data', 'See the exposure.', 'Costs → product margin'],
        ['My approach', 'Build a repeatable pricing and costing framework.', 'I developed costing and margin analysis across 5,000+ SKUs, with automated cost-change alerts and self-service commercial visibility.', 'My contribution', 'The framework made changing costs easier to investigate and supported timely, evidence-led pricing decisions.', 'Decision framework', 'Act earlier.', 'Cost alerts + scenarios'],
        ['The outcome', '£400k of profit protected.', 'Early visibility of commodity cost increases supported timely pricing action and protected profit.', 'Business value', 'The outcome was a commercial decision supported by data—not simply a new report.', 'Business impact', '£400k.', 'Profit protected']
      ]
    },
    sku: {
      category: 'SKU rationalisation', question: '1,992 products. Which ones were earning their place?', value: '£1.7m', unit: 'savings opportunity identified',
      scope: '1,992 products · BOM-based prioritisation · Opportunity identified', evidence: 'sku',
      nodes: ['Product range', 'Components', 'Usage', 'Duplication', 'Rationalisation priorities'],
      stages: [
        ['The challenge', 'A large range makes prioritisation difficult.', 'Product complexity needed to be understood at component level to identify duplication, waste and rationalisation opportunities.', 'The leadership question', 'Which products deserve attention first—and what evidence should drive that choice?', 'Business problem', 'Find the value.', 'Complexity + cost'],
        ['The gap', 'Look beneath the product totals.', 'I used the connection between products, their bill of materials and component usage to structure the prioritisation.', 'The missing visibility', 'Product-level totals alone do not show where components, duplication and waste overlap.', 'The missing link', 'Product to BOM.', 'Component-level visibility'],
        ['My approach', 'Turn complexity into a manageable set of priorities.', 'I created a BOM-based analysis and RAG prioritisation framework across 1,992 products to investigate component usage and rationalisation potential.', 'My contribution', 'The framework structured the investigation and made the opportunity easier to discuss and prioritise.', 'Analytical framework', 'Prioritise clearly.', 'BOM + usage + RAG'],
        ['The outcome', '£1.7m in savings opportunities identified.', 'The analysis identified rationalisation opportunities through a repeatable commercial framework.', 'Business value', 'A clearer basis for deciding where to reduce duplication and waste. The £1.7m represents identified opportunity.', 'Business impact', '£1.7m.', 'Opportunity identified']
      ]
    },
    budget: {
      category: 'Budgeting & forecasting', question: 'How do you turn competing assumptions into one plan?', value: '£165m+', unit: 'budgeting & forecasting scope',
      scope: 'Commercial & Retail · Assumptions · Scenarios · Planning', evidence: 'budget',
      nodes: ['Sales & NPD', 'Pricing', 'Commodity costs', 'Labour & freight', 'Business plan'],
      stages: [
        ['The challenge', 'A plan needs more than a single revenue number.', 'Commercial and Retail planning brought together revenue priorities, new products and a changing cost base.', 'The leadership question', 'What assumptions does management need to understand before committing to the plan?', 'Management priority', 'Plan confidently.', 'Revenue + cost + margin'],
        ['The gap', 'Make the assumptions visible together.', 'I focused the planning framework on the commercial drivers: sales, pricing, new products, commodity costs, shipping and labour.', 'The missing connection', 'Management needs to see how different assumptions change the plan, not just receive a final total.', 'Connect the drivers', 'Make it explicit.', 'Assumptions + ownership'],
        ['My approach', 'Build the framework around the business drivers.', 'I supported budgeting and forecasting with structured assumptions, commercial analysis and scenario modelling across a £165m+ planning scope.', 'My contribution', 'I connected business priorities with the analytical frameworks needed to investigate options and support management discussions.', 'Planning framework', 'Model the options.', 'Drivers + scenarios'],
        ['The outcome', '£165m+ budgeting and forecasting responsibility.', 'The scope reflects the scale of commercial planning supported through data, analysis and management decision support.', 'Business value', 'A clearer link between strategic targets, commercial drivers and the assumptions behind the plan.', 'Planning scope', '£165m+.', 'Budgeting + forecasting']
      ]
    },
    automation: {
      category: 'BI capacity & improvement', question: 'How do you give a BI team more time to think?', value: '40%', unit: 'recurring BI work reduced',
      scope: 'Process improvement · Automation · Delegation · Ownership', evidence: 'automation',
      nodes: ['Recurring work', 'Processes', 'Automation', 'Team ownership', 'Capacity for insight'],
      stages: [
        ['The challenge', 'Recurring work competes with deeper analysis.', 'Repeated reporting and operational tasks can absorb the time a BI team needs to investigate business problems.', 'The leadership question', 'What work can we simplify, automate or give clearer ownership?', 'Team priority', 'Create capacity.', 'Time for higher-value work'],
        ['The gap', 'Change how the work flows.', 'I combined process improvement with delegation and analyst ownership, so automation also supported a more capable team.', 'The missing connection', 'Process improvement should make the team more capable, not just make one task run faster.', 'Find the friction', 'Rethink the work.', 'Process + people'],
        ['My approach', 'Combine automation with ownership.', 'I used workflow improvement, automation and delegation to reduce recurring work while developing analysts as independent problem-solvers.', 'My contribution', 'I connected the improvement work to team direction and capability, rather than treating automation as a standalone technical exercise.', 'Delivery framework', 'Improve & empower.', 'Automation + ownership'],
        ['The outcome', '40% less recurring BI work.', 'The improvement created space for the team to focus on business problems, investigation and insight.', 'Wider improvement record', 'The existing portfolio also documents 922 hours saved through improvement and automation.', 'Business impact', '40% less.', 'Recurring BI work']
      ]
    }
  };
  let activeCase = 'management';
  let activeStage = 0;
  const nextLabels = ['Explore my judgement', 'See the move', 'See the change', 'Return to the tension'];
  function setStage(stage) {
    activeStage = stage;
    const item = stories[activeCase].stages[stage];
    ['stage-label', 'stage-title', 'stage-copy', 'insight-label', 'insight-copy', 'core-top', 'core-title', 'core-bottom'].forEach((id, i) => put(id, item[i]));
    all('[data-stage]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.stage) === stage)));
    $('.network').dataset.phase = String(stage);
    $('.network').setAttribute('aria-label', `${stories[activeCase].category}: ${item[6]}. ${stories[activeCase].nodes.join(', ')}. Conceptual relationship map.`);
    put('stage-label', ['The tension', 'My judgement', 'The move', 'The change'][stage]);
    put('next-stage', nextLabels[stage]);
    put('story-position', `Chapter ${stage + 1} of 4`);
  }
  function setCase(key) {
    if (!stories[key]) return;
    activeCase = key;
    const item = stories[key];
    ['category', 'question', 'value', 'unit', 'scope'].forEach(part => put(`story-${part}`, item[part]));
    ['one', 'two', 'three', 'four', 'out'].forEach((node, i) => put(`node-${node}`, item.nodes[i]));
    $('#story-evidence').href = `#details-${item.evidence}`;
    $('#story-evidence').dataset.detail = item.evidence;
    all('.case-picker [data-case]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.case === key));
      const state = button.querySelector('.case-card-state');
      if (state) state.textContent = button.dataset.case === key ? 'Selected' : 'Explore';
    });
    setStage(0);
  }
  all('.case-picker [data-case]').forEach(button => button.addEventListener('click', () => setCase(button.dataset.case)));
  all('[data-stage]').forEach(button => button.addEventListener('click', () => setStage(Number(button.dataset.stage))));
  $('#next-stage').addEventListener('click', () => setStage((activeStage + 1) % 4));
  document.addEventListener('click', event => {
    const link = event.target.closest('[data-case-link]');
    if (link) setCase(link.dataset.caseLink);
  });
  function followHash() {
    const key = window.location.hash.slice(1);
    if (stories[key]) {
      setCase(key);
      if (key !== 'management') $('#impact').scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }
  window.addEventListener('hashchange', followHash);
  followHash();
  setStage(0);

  const methods = [
    ['01 / Find the real question', 'What are we really trying to change?', 'Agree the business problem and the decision it requires before choosing a tool or building a report.', '1,992 products. Where should we focus?', 'The starting question was where complexity, duplication and component usage were hiding commercial opportunity.'],
    ['02 / Create a shared framework', 'What would a good decision look like?', 'Define success, ownership, assumptions and the criteria for comparing options. Give the team a problem they can own.', 'A common way to prioritise.', 'A BOM-based analysis and RAG framework gave the investigation a consistent structure.'],
    ['03 / Investigate the evidence', 'What does the evidence tell us?', 'Connect data with business context. Challenge definitions, investigate the drivers and make gaps in the evidence explicit.', 'Look beneath the product total.', 'Connecting products to component usage helped reveal duplication and rationalisation potential.'],
    ['04 / Compare the choices', 'What happens if we act? Or wait?', 'Compare alternatives, assumptions and trade-offs. Make the recommendation and its uncertainty clear enough for management to decide.', 'Make the opportunity discussable.', 'The framework gave commercial and operational conversations a shared basis for deciding where to focus.'],
    ['05 / Mobilise delivery', 'Who owns the next move?', 'Translate the decision into priorities, a delivery roadmap and clear responsibilities. Coach the team and remove barriers.', 'Turn analysis into priorities.', 'The RAG framework structured the investigation and made the opportunities easier to discuss and prioritise.'],
    ['06 / Measure and learn', 'Did the decision create value?', 'Return to the original objective. Separate identified opportunity from realised results, then use what changed to shape the next decision.', '£1.7m opportunity identified.', 'This is the identified savings opportunity from the analysis, rather than a claim of fully realised savings.']
  ];
  const methodNames = ['Question', 'Frame', 'Insight', 'Choice', 'Action', 'Outcome'];
  let activeMethod = 0;
  function selectMethod(index) {
    activeMethod = index;
    all('[data-method]').forEach(item => item.setAttribute('aria-pressed', String(Number(item.dataset.method) === index)));
    ['method-label', 'method-title', 'method-copy', 'method-example-title', 'method-example-copy'].forEach((id, i) => put(id, methods[index][i]));
    put('method-position', `0${index + 1} / 06`);
    put('next-method', index === 5 ? 'Return to Question' : `Next: ${methodNames[index + 1]}`);
  }
  all('[data-method]').forEach(button => button.addEventListener('click', () => selectMethod(Number(button.dataset.method))));
  $('#next-method').addEventListener('click', () => selectMethod((activeMethod + 1) % methods.length));
  const stakeholders = [
    ['Pricing and costing frameworks across 5,000+ SKUs connect changing costs with margin decisions.', 'Explore the commercial story', 'pricing'],
    ['Budgeting and forecasting across a £165m+ scope connect management targets with commercial assumptions and scenarios.', 'Explore the planning story', 'budget'],
    ['BOM-based analysis across 1,992 products connects component usage, duplication and rationalisation opportunities.', 'Explore the rationalisation story', 'sku'],
    ['Process improvement and automation reduce recurring work and create more capacity for investigation and insight.', 'Explore the improvement story', 'automation'],
    ['The BI transformation connects delivery roadmaps, clear definitions and business validation across 15+ business areas.', 'Explore the transformation story', 'management']
  ];
  all('[data-stakeholder]').forEach(button => button.addEventListener('click', () => {
    const item = stakeholders[Number(button.dataset.stakeholder)];
    all('[data-stakeholder]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    put('stakeholder-copy', item[0]);
    put('stakeholder-link', item[1]);
    $('#stakeholder-link').dataset.caseLink = item[2];
  }));

  const images = [
    ['power-bi.png', 'Management BI', 'Original Power BI management reporting evidence.', 1898, 924],
    ['clean360-results.png', 'Clean360 results', 'Demonstration estimates of productivity and cost. These are scenario outputs, not realised savings.', 271, 412],
    ['clean360-business-case.png', 'Clean360 business case', 'Original customer business-case screenshot. The displayed values are demonstration estimates.', 520, 505],
    ['machine-identity.png', 'Machine identity', 'Prototype machine identity and information interface.', 447, 512],
    ['smartassist-machine.png', 'SmartAssist machine view', 'Prototype machine information and service interface.', 459, 913],
    ['smartassist-diagnosis.png', 'SmartAssist diagnostics', 'Prototype guided diagnostic workflow.', 508, 534],
    ['hardware-prototype.png', 'Trackable Machine hardware', 'Original physical prototype, connecting movement sensing and runtime information.', 302, 370],
    ['firmware.png', 'Trackable Machine firmware', 'Original firmware evidence from the connected-machine prototype.', 842, 230],
    ['owner-dashboard.png', 'Trackable Machine dashboard', 'Prototype owner dashboard for machine usage and service information.', 1875, 928],
    ['ecosystem-roadmap.png', 'Connected ecosystem roadmap', 'Original roadmap linking product data, service and customer opportunities.', 1301, 729]
  ];
  const products = {
    clean360: { status: 'Live · Pre-sales decision support', title: 'Make the value visible before the sale.', copy: 'Clean360 turns productivity, cost and ROI assumptions into a customer business case.', facts: ['Compare customer scenarios', 'Quantify estimated productivity and cost', 'Create a customer-ready business case'], note: 'Screenshot values are demonstration estimates, not realised savings.', image: 2 },
    trackable: { status: 'Prototype · In-use intelligence', title: 'Turn machine activity into a source of insight.', copy: 'Trackable Machine explores how movement and runtime data can support usage visibility and maintenance decisions.', facts: ['Measure movement and runtime', 'Calculate distance and area from captured data', 'Explore owner visibility and maintenance support'], note: 'Physical prototype and dashboard concept. Future features are distinguished in the full project evidence.', image: 8 },
    smartassist: { status: 'Prototype · Post-sales support', title: 'Connect the machine to the help it needs.', copy: 'SmartAssist / CleanIQ explores machine-specific diagnostics, servicing and customer interaction through a connected interface.', facts: ['Access machine identity and key information', 'Guide diagnosis and service conversations', 'Connect product information with after-sales support'], note: 'Product and service prototype, with phased development explored in the project roadmap.', image: 5 }
  };
  let activeImage = images[2];
  function selectProduct(key) {
    const product = products[key];
    all('[data-product]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.product === key)));
    put('product-status', product.status); put('product-heading', product.title); put('product-description', product.copy); put('product-note', product.note);
    $('#product-facts').replaceChildren(...product.facts.map(fact => { const li = document.createElement('li'); li.textContent = fact; return li; }));
    activeImage = images[product.image];
    const element = $('#product-image');
    element.src = `assets/${activeImage[0]}`; element.alt = activeImage[2]; element.width = activeImage[3]; element.height = activeImage[4];
    $('#product-image-button').setAttribute('aria-label', `Enlarge ${activeImage[1]} screenshot`);
    put('product-caption', `${activeImage[1]} · Original project evidence`);
  }
  all('[data-product]').forEach(button => button.addEventListener('click', () => selectProduct(button.dataset.product)));
  const dialog = $('#image-dialog');
  let imageOpener;
  function showImage(item, opener) {
    imageOpener = opener;
    put('image-title', item[1]); put('image-description', item[2]);
    const img = $('#full-image');
    img.src = `assets/${item[0]}`; img.alt = item[2]; img.width = item[3]; img.height = item[4];
    $('#original-image').href = `assets/${item[0]}`;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    $('#close-image').focus();
  }
  $('#product-image-button').addEventListener('click', event => showImage(activeImage, event.currentTarget));
  $('#close-image').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; if (imageOpener) imageOpener.focus(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  const gallery = $('#evidence-gallery');
  images.forEach((item) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'gallery-item'; button.setAttribute('aria-label', `View ${item[1]} at full size`);
    const img = document.createElement('img'); img.src = `assets/${item[0]}`; img.alt = item[1]; img.loading = 'lazy'; img.width = item[3]; img.height = item[4];
    const name = document.createElement('strong'); name.textContent = item[1];
    const note = document.createElement('span'); note.textContent = 'View original screenshot';
    button.append(img, name, note); button.addEventListener('click', () => showImage(item, button)); gallery.append(button);
  });
  selectProduct('clean360');
  const menu = $('.menu');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); $('#navigation').classList.toggle('open', open); });
  all('#navigation a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); $('#navigation').classList.remove('open'); }));

  const detailDialog = $('#detail-dialog');
  const detailBody = $('#detail-body');
  let detailOpener;
  function closeDetail() { if (detailDialog.open) detailDialog.close(); }
  function openDetail(key, opener) {
    const template = document.getElementById(`detail-template-${key}`);
    if (!template) return;
    if (!detailDialog.open) detailOpener = opener;
    put('detail-title', template.dataset.title);
    detailBody.replaceChildren(template.content.cloneNode(true));
    if (!detailDialog.open) detailDialog.showModal();
    document.body.style.overflow = 'hidden';
    detailDialog.scrollTop = 0;
    $('#close-detail').focus();
  }
  document.addEventListener('click', event => {
    const detailLink = event.target.closest('[data-detail]');
    if (detailLink) { event.preventDefault(); openDetail(detailLink.dataset.detail, detailLink); return; }
    const journeyLink = event.target.closest('[data-open-journey]');
    if (journeyLink) {
      event.preventDefault(); closeDetail();
      const journey = $('#full-journey'); journey.open = true;
      journey.scrollIntoView({behavior: 'instant', block: 'start'});
      journey.querySelector('summary').focus({preventScroll:true});
      return;
    }
    const sectionLink = event.target.closest('[data-return-section]');
    if (sectionLink) {
      event.preventDefault(); closeDetail();
      const section = document.getElementById(sectionLink.dataset.returnSection);
      if (section) { section.scrollIntoView({behavior:'instant', block:'start'}); section.setAttribute('tabindex','-1'); section.focus({preventScroll:true}); }
    }
  });
  $('#close-detail').addEventListener('click', closeDetail);
  detailDialog.addEventListener('close', () => { document.body.style.overflow = ''; if (detailOpener?.isConnected) detailOpener.focus({preventScroll:true}); });
  detailDialog.addEventListener('click', event => {
    if (event.target !== detailDialog) return;
    const box = detailDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeDetail();
  });
})();
