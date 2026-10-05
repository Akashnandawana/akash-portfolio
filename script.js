const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const isOpen=menu.getAttribute('aria-expanded')==='true'; menu.setAttribute('aria-expanded',String(!isOpen));nav.classList.toggle('open',!isOpen);menu.textContent=isOpen?'Menu':'Close'; });
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.textContent='Menu';}));

const projects = {
  clean360: {
    title: 'Clean360', category: '01 / Pre-sales · Commercial decision tool', status: 'Live',
    gap: 'The sales conversation needed a stronger way to prove customer value. There was no customer savings calculator to turn operational requirements into a quantified business case.',
    built: ['A calculation engine using labour, water, chemical and energy assumptions.', 'Estimated savings and ROI / payback outputs, supported by a cost waterfall.', 'Weighted product-fit scoring using productivity, runtime, recommended quantity, water flow, capacity and technical suitability.', 'A downloadable customer business case and a route to a free demonstration.'],
    value: 'Creates a repeatable and explainable way to match requirements to products, and connects the analysis to the next commercial action.',
    boundary: 'Live self-initiated solution. The screenshots use fictional demonstration inputs to illustrate the savings calculations.',
    gallery: '<figure><div class="paired"><img src="assets/clean360-results.webp" alt="Clean360 results showing estimated savings, ROI and a cost waterfall"><img src="assets/clean360-business-case.webp" alt="Downloadable business case from Clean360"></div><figcaption>Original live output and customer-ready PDF. Values are demonstration inputs.</figcaption></figure>'
  },
  smartassist: {
    title: 'CleanIQ + SmartAssist', category: '02 / Post-sales · Digital identity & support', status: 'Prototype',
    gap: 'Machine owners need a clear starting point for support: the exact model, its ownership context and checks that are relevant to their machine.',
    built: ['An NFC-enabled machine identity showing model, serial, purchase and warranty context.', 'A guided, machine-specific SmartAssist diagnostic journey.', 'Resolution routes to the correct consumables, accessories, spares or support.', 'A concept for turning recurring support patterns into evidence for Product and R&D.'],
    value: 'Reduces the need to search generic manuals or parts lists. Machine context can support a more useful relationship throughout ownership.',
    boundary: 'Working prototype and journey. Directors and Product Management have reviewed the concept; phased development is under discussion. Support savings have not been quantified.',
    gallery: '<figure class="paired"><img src="assets/machine-identity.webp" alt="NFC machine identification with model, serial, purchase date and warranty"><img src="assets/smartassist-diagnosis.webp" alt="SmartAssist step showing the low battery charge check"><figcaption>Identify the exact machine, then guide the user through relevant checks.</figcaption></figure><figure><img src="assets/smartassist-machine.webp" alt="SmartAssist machine selection and problem selection screen"><figcaption>The machine context guides the support journey.</figcaption></figure>'
  },
  trackable: {
    title: 'Trackable Machine', category: '03 / In-use intelligence · Physical + digital', status: 'Prototype',
    gap: 'Customers had limited visibility of real machine runtime and usage. That made it harder to understand utilisation, cleaning output and maintenance needs.',
    built: ['A physical ESP32, encoder and OLED proof of concept.', 'Movement and runtime capture, with derived distance and calculated cleaning area.', 'A web interface for cleaner / site sessions, utilisation, productivity and cleaning history.', 'Runtime-based brush and filter maintenance examples.'],
    value: 'Shows how machine usage data can help customers plan maintenance and understand output, while building a future evidence base for product reliability and development.',
    boundary: 'Independently built physical and digital proof of concept. Movement/runtime are measured; distance and area are calculated. Exact indoor positioning and tank sensing are future capabilities.',
    gallery: '<figure><img src="assets/owner-dashboard.webp" alt="Trackable Machine owner dashboard with cleaning performance and maintenance indicators"><figcaption>Original owner dashboard prototype.</figcaption></figure><figure class="paired"><img src="assets/hardware-prototype.webp" alt="ESP32 and OLED breadboard prototype"><img src="assets/firmware.webp" alt="Encoder firmware and successful upload in the Arduino development environment"><figcaption>Original bench prototype and encoder firmware evidence.</figcaption></figure>'
  }
};
const dialog=document.querySelector('#case-dialog');
const content=document.querySelector('#case-content');
let trigger=null;
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
  const p=projects[button.dataset.case];
  if(!p)return;
  trigger=button;
  content.innerHTML=`<div class="case-body"><div class="case-header"><div><span class="eyebrow">${p.category}</span><h2 id="case-title">${p.title}</h2></div><span class="status ${p.status==='Live'?'live':''}">${p.status}</span></div><div class="case-layout"><div class="case-text"><h3>Business problem</h3><p>${p.gap}</p><h3>My role</h3><p>I identified the opportunity and independently developed this solution.</p><h3>Action</h3><ul>${p.built.map(item=>`<li>${item}</li>`).join('')}</ul><h3>Business outcome</h3><p>${p.value}</p><div class="case-boundary">${p.boundary}</div></div><div class="case-gallery">${p.gallery}</div></div></div>`;
  dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');
}));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(window.restoreProjectFocus?.isConnected){window.restoreProjectFocus.focus();window.restoreProjectFocus=null;}else if(trigger)trigger.focus();});
