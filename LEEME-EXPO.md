# EXPO CET 33 · MMO
Base estática para la pantalla de bienvenida y el acceso desde celulares. Sin instalación, cuentas ni servicios externos para navegar.

## Abrir en la computadora
Descargar el repositorio completo como ZIP, extraerlo y abrir index.html en Chrome o Edge. Conservar todas las carpetas. El video, las fotos y el plano funcionarán sin internet cuando se incorporen como archivos locales. Pantalla completa con el botón ⛶. El modo proyección regresa al inicio tras 2 minutos sin actividad; al tener video intenta reanudarlo, sujeto a los permisos de reproducción del navegador. El sonido requiere interacción inicial.

## Incorporar contenido
Editar content.js:
- video: ruta relativa a assets/video/presentacion.mp4, una vez terminado.
- poster: imagen opcional para el video.
- map: plano confirmado en assets/plano/.
- items de cada sección: lista de {src, title, description}.
- portal: tarjetas descriptivas de la muestra; no enlaza al portal en desarrollo.
Colocar fotos en assets/fotos/. No hace falta renombrar los archivos originales; usar su ruta exacta. Las fotos de la galería y el plano deben ser imágenes, no PDF.

## Publicar en GitHub Pages
Settings → Pages → Deploy from a branch → main → /(root) → Save.
Dirección prevista: https://patagoniatec-ux.github.io/expo-cet33-mmo/
El QR apunta a esa dirección raíz: mismo escritorio, navegación independiente. No será utilizable hasta activar Pages. La versión móvil requiere internet.
No contiene editor ni carga pública de archivos. El repositorio y sus archivos publicados son públicos.

## Estado
Pendientes: video final, fotos, escudo oficial, distribución de cursos, vistas reales del portal. El 33 es un emblema tipográfico provisional. No se han inventado ubicaciones, proyectos ni fotos.
El diseño toma como referencia el borrador aprobado: azul oscuro, acentos ámbar y cian, video central y botones laterales. Al no haber fotos todavía, la portada muestra un dibujo arquitectónico.
