const photos = [
  {
    "src": "assets/planos/116933.webp",
    "alt": "Modelado de una vivienda en SketchUp",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116937.webp",
    "alt": "Plotter para la impresión de planos",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116931.webp",
    "alt": "Diseño digital en el aula",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116929.webp",
    "alt": "Representación tridimensional de los ambientes",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116927.webp",
    "alt": "Desarrollo del modelo arquitectónico",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116925.webp",
    "alt": "Láminas de proyectos arquitectónicos",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116917.webp",
    "alt": "Trabajo de diseño en el aula de informática",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116909.webp",
    "alt": "Primeros pasos del modelo tridimensional",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116907.webp",
    "alt": "Dibujo y modelado asistido por computadora",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/planos/116903.webp",
    "alt": "Detalles del proyecto en SketchUp",
    "width": 1536,
    "height": 1152
  }
];
const photo=document.querySelector('#photo'),caption=document.querySelector('#caption'),counter=document.querySelector('#counter'),strip=document.querySelector('#thumbnails'),carousel=document.querySelector('#carousel'),error=document.querySelector('#error');
let current=0,startX=null,startY=null;
const thumbs=photos.map((item,index)=>{const button=document.createElement('button');button.type='button';button.className='thumb';button.setAttribute('aria-label',`Ver foto ${index+1}: ${item.alt}`);button.setAttribute('aria-current',String(index===0));const image=document.createElement('img');image.src=item.src;image.alt='';image.loading='lazy';button.append(image);button.addEventListener('click',()=>show(index));strip.append(button);return button});
function show(index){current=(index+photos.length)%photos.length;const item=photos[current];error.hidden=true;photo.src=item.src;photo.alt=item.alt;photo.width=item.width;photo.height=item.height;caption.textContent=item.alt;counter.textContent=`Foto ${current+1} de ${photos.length}`;thumbs.forEach((button,i)=>button.setAttribute('aria-current',String(i===current)));const selected=thumbs[current];strip.scrollTo({left:Math.max(0,selected.offsetLeft-strip.offsetLeft-strip.clientWidth/2+selected.clientWidth/2),behavior:'instant'});const preload=new Image();preload.src=photos[(current+1)%photos.length].src;}
document.querySelector('#previous').addEventListener('click',()=>show(current-1));
document.querySelector('#next').addEventListener('click',()=>show(current+1));
document.addEventListener('keydown',event=>{if(event.altKey||event.ctrlKey||event.metaKey)return;if(event.key==='ArrowLeft'){event.preventDefault();show(current-1)}if(event.key==='ArrowRight'){event.preventDefault();show(current+1)}});
const viewer=document.querySelector('.viewer');
viewer.addEventListener('touchstart',event=>{if(event.touches.length!==1){startX=null;return}startX=event.touches[0].clientX;startY=event.touches[0].clientY},{passive:true});
viewer.addEventListener('touchend',event=>{if(startX===null)return;const dx=event.changedTouches[0].clientX-startX,dy=event.changedTouches[0].clientY-startY;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3)show(current+(dx<0?1:-1));startX=null},{passive:true});
viewer.addEventListener('touchcancel',()=>startX=null,{passive:true});
photo.addEventListener('error',()=>error.hidden=false);
document.querySelector('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(carousel.requestFullscreen)await carousel.requestFullscreen();else document.querySelector('.hint').textContent='Podés ampliar las imágenes girando el celular de costado.'}catch{document.querySelector('.hint').textContent='La pantalla completa no está disponible en este navegador.'}});
show(0);
