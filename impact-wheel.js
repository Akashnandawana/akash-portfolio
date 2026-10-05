(() => {
 const areas = [
 {name:'Commercial & Sales',label:['SALES'],color:'#c5edaf',metric:'5,000+ SKUs',caption:'Pricing & costing framework',intro:'Connecting commercial priorities with pricing, customer insight and decisions that protect margin.',work:[['Pricing & margin','Created self-service pricing and costing models, with visibility of cost movements and margin targets.','#pricing'],['Commercial performance','Used customer segmentation and analysis to inform retention and revenue opportunities.','#performance'],['Clean360','Built a customer business-case calculator with estimated savings, product fit and payback.','clean360']],result:'£400k profit protected through timely pricing action.'},
 {name:'Finance',label:['FINANCE'],color:'#a8d7e5',metric:'£165m+',caption:'Budgeting & forecasting responsibility',intro:'Bringing revenue assumptions, cost drivers and management priorities into a coordinated planning roadmap.',work:[['Budgeting & forecasting','Defined planning inputs and stages across sales, NPD, pricing, commodity, shipping and labour.','#budget'],['P&L, CAPEX & overheads','Supported Directors with financial analysis to identify avoidable spend and assess profitability.','#performance'],['Cost-change visibility','Developed costing models and automated alerts for BOM, labour and overhead changes.','#pricing']],result:'14% overhead reduction reported across the overhead analysis initiative.'},
 {name:'Supply Chain',label:['SUPPLY','CHAIN'],color:'#edc6a2',metric:'£1.7m',caption:'SKU rationalisation savings',intro:'Making product complexity and component duplication visible so management can prioritise rationalisation.',work:[['SKU rationalisation','Created a RAG classification framework using BOM component usage across a 1,992-product programme.','#sku'],['Planning dependencies','Connected product and cost assumptions with the wider budgeting roadmap.','#budget'],['Trusted operational data','Built governed, reusable information supporting Supply Chain and other business functions.','#platform']],result:'The framework helped management review waste, duplication and rationalisation candidates.'},
 {name:'Logistics',label:['LOGISTICS'],color:'#c2d3ed',metric:'Shipping costs',caption:'Connected to the planning roadmap',intro:'Giving management visibility of shipping assumptions and their implications for budgets and product costs.',work:[['Shipping in the budget','Included shipping alongside commodity, labour, sales and pricing inputs in the forecasting roadmap.','#budget'],['Cost implications','Connected changing cost assumptions to margin and pricing decisions.','#pricing']],result:'Shipping assumptions form part of the £165m+ planning responsibility. Shipping costs are reviewed alongside the other planning inputs.'},
 {name:'Operations',label:['OPERATIONS'],color:'#9dd9cb',metric:'922 hours',caption:'Reporting & workflow time saved',intro:'Reducing repetitive preparation and giving teams reliable information they can act on.',work:[['Workflow automation','Combined Python and Power Automate with self-service improvements and clear ownership.','#automation'],['Management BI','Directed the Qlik Sense-to-Power BI transformation, with a roadmap, UAT and business sign-off.','#management'],['Machine usage intelligence','Built a physical and digital prototype capturing runtime and movement, with calculated cleaning output.','trackable']],result:'40% less recurring BI workload. The 922-hour automation record is a separate measure.'},
 {name:'R&D & Innovation',label:['R&D'],color:'#dcc9e9',metric:'3 initiatives',caption:'Connected product ecosystem',intro:'Connecting product ownership, customer support and real usage data with future product intelligence.',work:[['Clean360','A live decision tool translating customer requirements into a quantified business case.','clean360'],['CleanIQ + SmartAssist','An NFC machine identity and guided diagnostic prototype, with routes to parts and support.','smartassist'],['Trackable Machine','An ESP32, encoder and OLED proof of concept connected to an owner dashboard.','trackable']],result:'Live tools and prototypes demonstrate the path from physical products to a digital ecosystem.'},
 {name:'Data & Governance',label:['DATA &','GOVERNANCE'],color:'#bad4b7',metric:'Microsoft Fabric',caption:'Trusted, reusable data foundations',intro:'Creating the governance and data foundation that makes cross-functional decisions consistent and traceable.',work:[['Platform & semantic models','Owned the BI/data roadmap across Fabric, ETL/ELT and lean, reusable semantic models.','#platform'],['Definitions & quality','Established a Sales KPI framework, glossary, reconciliation, lineage and model-health logs.','#platform'],['Adoption & transformation','Created a UAT framework, issue ownership and sign-off to support management reporting.','#management']],result:'Governed information supporting Commercial, Finance, Supply Chain and Operations.'},
 {name:'Leadership',label:['LEADERSHIP'],color:'#ead8a5',metric:'Team leadership',caption:'Direction, development & ownership',intro:'Turning management priorities into clear problems, analytical frameworks and delivery roadmaps for the BI team.',work:[['Team development','Developed analysts into subject-matter owners with training, support and clear priorities.','#leadership'],['Problem-to-outcome roadmap','Prioritised opportunities, defined success measures and sequenced work around business value.','#method'],['Capacity for insight','Combined delegation, self-service and automation to release time for higher-value investigation.','#automation']],result:'Progressed from Analyst to BI Manager in under four years.'}
 ];
 const commercial = {...areas[0],name:'Commercial',label:['COMMERCIAL'],intro:'Connecting pricing, cost and customer insight with commercial decisions.',work:areas[0].work.slice(0,2)};
 const sales = {...areas[0],name:'Sales',label:['SALES'],color:'#c2d3ed',metric:'Clean360',caption:'Live commercial decision tool',intro:'Helping sales teams explain customer value and make informed pricing decisions.',work:[areas[0].work[0],areas[0].work[2]],result:'A repeatable way to demonstrate estimated savings, payback and product fit. Calculator outputs use demonstration assumptions.'};
 const logistics = areas[3];
 areas.splice(0,1,commercial);
 areas.splice(3,1,sales);
 areas[5].name='Product / R&D';
 const problems = [
 'Cost pressure and fragmented commercial information made margin decisions harder.',
 'Planning needed to connect revenue expectations with changing cost assumptions.',
 'Product complexity and component duplication created opportunities for waste.',
 'Sales teams needed a clearer way to explain customer value and pricing implications.',
 'Manual reporting consumed time, while management needed more reliable visibility.',
 'Machine owners had limited connected support and visibility of product usage.',
 'Fragmented systems required consistent definitions, quality and traceability.',
 'Recurring delivery demands needed clearer priorities, ownership and analyst capability.'
 ];
 const roles = [
 'Developed pricing and costing frameworks and supported commercial recommendations.',
 'Created and lead the budgeting and forecasting roadmap across Commercial and Retail.',
 'Created the BOM-based RAG framework to support rationalisation decisions.',
 'Developed self-service pricing models and built the Clean360 customer business-case tool.',
 'Directed management BI transformation and combined automation with team ownership.',
 'Identified opportunities and independently built live tools and working prototypes.',
 'Owned the BI/data roadmap and defined governance elements and model standards.',
 'Manage a BI team, set outcomes, coach through challenges and develop independent ownership.'
 ];
 areas.forEach((a,i)=>{a.problem=problems[i];a.role=roles[i];a.activity=a.work[0][1]});
 areas[2].result='£1.7m SKU savings identified across the 1,992-product rationalisation programme.';
 areas[7].result='A BI team with clear objectives, weekly coaching and increasing ownership. 40% lower recurring workload is reported across automation and team-development work.';
 const ns='http://www.w3.org/2000/svg',g=document.getElementById('business-wheel-segments'),controls=document.getElementById('wheel-area-buttons'),detail=document.getElementById('wheel-detail');
 const polar=(r,a)=>[320+r*Math.cos(a),320+r*Math.sin(a)];
 function select(i){
  [...g.children].forEach((el,j)=>el.setAttribute('aria-pressed',String(i===j)));
  [...controls.children].forEach((el,j)=>el.setAttribute('aria-pressed',String(i===j)));
  const a=areas[i];detail.style.setProperty('--area-color',a.color);
  detail.innerHTML=`<div class="stakeholder-heading"><p class="kicker">${String(i+1).padStart(2,'0')} / Stakeholder impact</p><h3>${a.name}</h3></div><div class="wheel-outcome"><strong>${a.metric}</strong><span>${a.caption}</span><p>${a.result}</p></div><div class="stakeholder-contribution"><h4>My contribution</h4><p>${a.role}</p></div><details class="wheel-evidence"><summary>Explore the problem, work & evidence</summary><div class="stakeholder-context"><h4>Business problem</h4><p>${a.problem}</p><h4>What I did</h4><p>${a.activity}</p></div><div class="area-work">${a.work.map(([title,description,link])=>`<article><h5>${title}</h5><p>${description}</p>${link.startsWith('#')?`<a href="${link}">Read the case study</a>`:`<button type="button" data-wheel-case="${link}">View project & screenshots</button>`}</article>`).join('')}</div></details>`;
 }
 areas.forEach((a,i)=>{
  const start=-Math.PI/2+i*Math.PI/4+.016,end=start+Math.PI/4-.032,r1=138,r2=305;
  const points=[polar(r1,start),polar(r2,start),polar(r2,end),polar(r1,end)];
  const el=document.createElementNS(ns,'g');el.setAttribute('role','button');el.setAttribute('tabindex','0');el.setAttribute('aria-label',a.name);el.classList.add('wheel-segment');
  const p=document.createElementNS(ns,'path');p.setAttribute('d',`M${points[0]} L${points[1]} A${r2} ${r2} 0 0 1 ${points[2]} L${points[3]} A${r1} ${r1} 0 0 0 ${points[0]} Z`);p.setAttribute('fill',a.color);el.append(p);
  const [x,y]=polar(224,(start+end)/2);
  a.label.forEach((line,j)=>{const t=document.createElementNS(ns,'text');t.setAttribute('x',x);t.setAttribute('y',y+(j-(a.label.length-1)/2)*20);t.setAttribute('text-anchor','middle');t.setAttribute('dominant-baseline','middle');t.textContent=line;el.append(t)});
  el.addEventListener('click',()=>select(i));el.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();select(i)}else if(['ArrowRight','ArrowLeft','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const next=(i+(['ArrowRight','ArrowDown'].includes(e.key)?1:7))%8;select(next);g.children[next].focus()}});g.append(el);
  const b=document.createElement('button');b.type='button';b.textContent=a.name;b.addEventListener('click',()=>select(i));controls.append(b);
 });
 detail.addEventListener('click',e=>{
  const b=e.target.closest('[data-wheel-case]');if(b){document.querySelector(`[data-case="${b.dataset.wheelCase}"]`).click();window.restoreProjectFocus=b;return}
  const a=e.target.closest('a[href^="#"]');if(a){const target=document.getElementById(a.hash.slice(1));if(target){let el=target;while(el){if(el.matches('details'))el.open=true;el=el.parentElement;}}}
 });
 select(0);
})();
