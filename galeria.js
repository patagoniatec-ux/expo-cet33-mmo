const photos = [
  {
    "src": "assets/galeria/115062.webp",
    "alt": "Encuentro de la comunidad educativa",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/galeria/115060.webp",
    "alt": "Estudiantes en la muestra de proyectos",
    "width": 1152,
    "height": 1536
  },
  {
    "src": "assets/galeria/115056.webp",
    "alt": "Bienvenidos a la expo",
    "width": 1152,
    "height": 1536
  },
  {
    "src": "assets/galeria/115058.webp",
    "alt": "Una jornada compartida",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/galeria/115052.webp",
    "alt": "Actividades en el aula",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/galeria/115048.webp",
    "alt": "Recorrida por los trabajos",
    "width": 1152,
    "height": 1536
  },
  {
    "src": "assets/galeria/115044.webp",
    "alt": "La escuela se encuentra",
    "width": 1536,
    "height": 1152
  },
  {
    "src": "assets/galeria/115046.webp",
    "alt": "Proyectos y experiencias de estudiantes",
    "width": 1152,
    "height": 1536
  },
  {
    "src": "assets/galeria/115050.webp",
    "alt": "Aprender haciendo en la expo",
    "width": 1152,
    "height": 1536
  },
  {
    "src": "assets/galeria/115054.webp",
    "alt": "Trabajo compartido en el aula",
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
