window.EXPO_SPACES = [{"id": 1, "name": "Historia", "course": "1.º CB (todos)", "teachers": "Ríos Marcos y Valdéz Patricia", "points": [[317, 785]]}, {"id": 2, "name": "Construcciones Complementarias, Metálica y Madera", "course": "3.º 1.ª CS", "teachers": "Loncón Marcela", "points": [[771, 785], [1278, 472]]}, {"id": 3, "name": "Instalaciones Térmicas", "course": "4.º CS (todos)", "teachers": "Bujer Andrea", "points": [[262, 1112], [397, 1253]]}, {"id": 4, "name": "Geografía", "course": "1.º CB (todos)", "teachers": "Grandón Gisella", "points": [[470, 697]]}, {"id": 5, "name": "Lengua y Literatura", "course": "1.º y 2.º CB; 1.º, 2.º y 3.º CS", "teachers": "García León Ailín", "points": [[465, 492]]}, {"id": 6, "name": "Proyecto", "course": "2.º 1.ª y 2.ª CS; 3.º 1.ª y 2.ª CS; 4.º 1.ª, 2.ª y 3.ª CS", "teachers": "Plos Néstor, Leone Diego, Acuña Brian, Beltran Emanuel y Oviedo Jorge", "points": [[458, 1112], [628, 1112]]}, {"id": 7, "name": "Estática y Resistencia de Materiales", "course": "2.º 2.ª CS", "teachers": "Bujer Andrea", "points": [[460, 389]]}, {"id": 8, "name": "Dibujo Técnico", "course": "", "teachers": "Plos, Moreno, Colombo, Adrogué y Rodríguez", "points": [[312, 167]]}, {"id": 9, "name": "Inglés", "course": "1.º 3.ª CB; 1.º 3.ª CS y 3.º 2.ª CS", "teachers": "Antonucci Paola", "points": [[314, 344]]}, {"id": 10, "name": "Biología", "course": "2.º 2.ª CB", "teachers": "Montes Saraí", "points": [[467, 594]]}, {"id": 11, "name": "Hábitat", "course": "2.º 1.ª CS y 2.º 3.ª CS", "teachers": "Bravo Lucía", "points": [[455, 289]]}, {"id": 12, "name": "Artística", "course": "1.º 2.ª y 1.º 3.ª CB", "teachers": "Bernardi Alicia", "points": [[881, 1104]]}, {"id": 13, "name": "Lengua y Literatura", "course": "1.º 2.ª CS", "teachers": "Soto Iara", "points": [[934, 1241]]}, {"id": 14, "name": "Electricidad", "course": "", "teachers": "", "points": [[1808, 1104]]}, {"id": 15, "name": "Electricidad III", "course": "", "teachers": "", "points": [[1854, 925]]}, {"id": 16, "name": "Construcciones I y II", "course": "", "teachers": "", "points": [[1854, 545]]}, {"id": 17, "name": "Herrería, soldadura y Metalurgia", "course": "", "teachers": "", "points": [[1854, 369]]}, {"id": 18, "name": "Carpintería", "course": "", "teachers": "", "points": [[2250, 350]]}, {"id": 19, "name": "Hojalatería", "course": "", "teachers": "", "points": [[2269, 545]]}, {"id": 20, "name": "Ajuste", "course": "", "teachers": "", "points": [[2269, 752]]}, {"id": 21, "name": "Informática", "course": "", "teachers": "", "points": [[1808, 1405]]}, {"id": 22, "name": "Huerta", "course": "", "teachers": "", "points": [[2269, 94]]}, {"id": 23, "name": "Lengua y Literatura", "course": "1.º 1.ª CB", "teachers": "Álvarez Daniela", "points": [[645, 595]]}, {"id": 24, "name": "Construcción de Hormigón Armado y Construcciones Complementarias", "course": "3.º 2.ª CS", "teachers": "Rojas y Colombo", "points": [[737, 150]]}, {"id": 25, "name": "Sala de Escape · Matemáticas", "course": "", "teachers": "", "points": [[1118, 1104]]}, {"id": 26, "name": "Juegos Didácticos · Matemáticas", "course": "", "teachers": "", "points": [[1351, 1104]]}, {"id": 27, "name": "Legislación de la Construcción", "course": "3.º CS", "teachers": "Carolina de la Canal", "points": [[645, 491]]}];
const expoStandLinks = {
 2: ['Detalles que construyen', 'https://detalles-que-construyen-cet33.sleekshore.chatgpt.site/#trabajos'],
 8: ['Ver láminas de Dibujo Técnico', 'https://dibujo-tecnico-ia-galeria.sleekshore.chatgpt.site/#trabajos'],
 9: ['Espacios que hablan', 'https://espacios-que-hablan-expo-enet.sleekshore.chatgpt.site'],
 24: ['Ver trabajos de Hormigón Armado', 'https://patagoniatec-ux.github.io/hormigon-armado/dist/galeria.html']
};

window.renderExpoMap = function (root, config) {
 const spaces=window.EXPO_SPACES;
 const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
 const toolbar=el('div','map-toolbar'),label=el('label','','Buscar un espacio'),search=el('input');
 search.type='search';search.placeholder='Número, materia, taller o docente…';search.id='map-search';label.htmlFor=search.id;
 const zoomOut=el('button','','−'),zoomIn=el('button','','+'),reset=el('button','','Ver todo');zoomOut.setAttribute('aria-label','Alejar plano');zoomIn.setAttribute('aria-label','Acercar plano');
 toolbar.append(label,search,zoomOut,zoomIn,reset);root.append(toolbar);
 const hint=el('p','map-hint','Tocá un número para conocer el espacio. Podés ampliar el plano y desplazarlo. Los números repetidos señalan más de una ubicación.');root.append(hint);
 const viewport=el('div','map-viewport'),canvas=el('div','map-canvas'),img=el('img');img.src=config.map;img.alt='Plano de la Muestra CET 33 2026 con espacios numerados interactivos';img.draggable=false;canvas.append(img);viewport.append(canvas);root.append(viewport);
 const dialog=el('dialog','space-dialog');dialog.setAttribute('aria-labelledby','space-title');
 const close=el('button','space-close','Cerrar ×'),badge=el('span','space-badge'),title=el('h3'),course=el('p'),teachers=el('p'),location=el('p'),locate=el('button','primary','Ubicar en el plano');title.id='space-title';
 const workActions=el('div'),workLink=el('a');
 workLink.target='_blank';
 workLink.rel='noopener';
 workActions.append(workLink);
 dialog.append(close,badge,title,course,teachers,location,workActions,locate);root.append(dialog);
 let selected=null,trigger=null,scale=1;
 const pins=[];
 function highlight(id){pins.forEach(p=>{p.classList.toggle('selected',p.dataset.id===String(id));p.setAttribute('aria-pressed',String(p.dataset.id===String(id)));});}
 function show(space,button){selected=space;trigger=button;highlight(space.id);badge.textContent='Espacio '+space.id;title.textContent=space.name;course.textContent=space.course?'Cursos: '+space.course:'';course.hidden=!space.course;teachers.textContent=space.teachers?'Docentes: '+space.teachers:'';teachers.hidden=!space.teachers;location.textContent=space.points.length>1?'Este espacio tiene '+space.points.length+' ubicaciones señaladas en el plano.':'Ubicación señalada en el plano con el número '+space.id+'.';
  const destination=expoStandLinks[space.id];
  workActions.className=destination?'map-actions':'';
  workLink.hidden=!destination;
  if(destination){
   const [label,url]=destination;
   workLink.textContent=label;
   workLink.href=url;
  }else{
   workLink.textContent='';
   workLink.removeAttribute('href');
  }
  dialog.showModal();
 }
 close.onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{if(trigger&&trigger.isConnected)trigger.focus({preventScroll:true});});
 const setZoom=value=>{scale=Math.max(1,Math.min(3,value));canvas.style.width=(scale*100)+'%';zoomOut.disabled=scale===1;zoomIn.disabled=scale===3;};
 zoomOut.onclick=()=>setZoom(scale-.5);zoomIn.onclick=()=>setZoom(scale+.5);reset.onclick=()=>{setZoom(1);viewport.scrollTo(0,0);};setZoom(1);
 locate.onclick=()=>{dialog.close();const pin=pins.find(p=>Number(p.dataset.id)===selected.id);pin.scrollIntoView({block:'center',inline:'center',behavior:'smooth'});pin.focus({preventScroll:true});};
 spaces.forEach(space=>space.points.forEach(([x,y],index)=>{const pin=el('button','map-pin',String(space.id));pin.style.left=(x/2600*100)+'%';pin.style.top=(y/1838*100)+'%';pin.dataset.id=space.id;pin.title=space.name;pin.setAttribute('aria-label',space.id+'. '+space.name+(space.points.length>1?' · ubicación '+(index+1):''));pin.setAttribute('aria-pressed','false');pin.onclick=()=>show(space,pin);pins.push(pin);canvas.append(pin);}));
 const heading=el('h3','map-list-title','Explorá los 27 espacios'),count=el('p','map-hint'),list=el('div','space-list');count.setAttribute('role','status');root.append(heading,count,list);
 const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 function filter(){const q=normalize(search.value.trim());const matched=spaces.filter(s=>normalize([s.id,s.name,s.course,s.teachers].join(' ')).includes(q));list.replaceChildren();count.textContent=matched.length?matched.length+' espacios · CB: Ciclo Básico · CS: Ciclo Superior':'No encontramos ese espacio. Probá con otra palabra o número.';matched.forEach(s=>{const b=el('button','space-card'),n=el('span','space-badge',String(s.id)),text=el('span'),name=el('strong','',s.name),sub=el('small','',s.course||'Muestra CET 33');text.append(name,sub);b.append(n,text);b.onclick=()=>show(s,b);list.append(b);});pins.forEach(p=>p.classList.toggle('map-pin-muted',!matched.some(s=>s.id===Number(p.dataset.id))));}search.addEventListener('input',filter);filter();
 const actions=el('div','map-actions');for(const [name,url,download] of [['Abrir PDF completo',config.mapPdf,false],['Descargar PDF',config.mapPdf,true],['Ver referencias originales',config.mapReferences,false]]){if(!url)continue;const a=el('a','',name);a.href=url;if(download)a.download='Muestra-CET33-2026.pdf';else{a.target='_blank';a.rel='noopener';}actions.append(a);}root.append(actions);
};
