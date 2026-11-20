# EDCAR AUTOTRONIC

Sitio web oficial del taller automotriz multimarca **EDCAR AUTOTRONIC**, ubicado en Mixco, Guatemala.

Landing page comercial de una sola página, optimizada para teléfonos, con conversión por WhatsApp y publicación en GitHub Pages.

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

El único gestor de paquetes permitido es **pnpm**. No uses npm ni yarn.

## Publicación en GitHub Pages

1. Crea un repositorio llamado `EdcarAutotronic-taller` (o actualiza el nombre en `vite.config.js` y en `.github/workflows/deploy.yml` si usas otro).
2. Sube el proyecto a la rama `main`.
3. En GitHub: **Settings → Pages → Source → GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` instala con pnpm, construye y publica `dist`.

El `base` de Vite en CI queda en `/EdcarAutotronic-taller/`. Para un dominio propio, define `BASE_PATH=/` en el entorno de build y completa `business.seo.siteUrl` en `src/data/business.js` para la URL canónica.

## Fotografías e identidad visual

Se incorporaron **11 fotografías auténticas del taller** proporcionadas por su propietario. Están convertidas a WebP y disponen de versiones pequeñas para cargar la galería sin afectar el rendimiento.

- `src/assets/images/hero-taller.webp`: portada del sitio.
- `src/assets/images/instalaciones.webp`: sección Nosotros.
- `src/assets/gallery/`: fotografías para la galería, versiones completas y miniaturas.
- `src/data/gallery.js`: categorías, orden, descripciones y rutas de las fotografías.
- `public/edcar-social.jpg`: imagen social para Open Graph.

El logotipo SVG actual es una **propuesta inicial**, no el logotipo oficial aprobado. Se puede cambiar desde `src/components/Logo.jsx` y `src/assets/brand/`.

## Información que debe verificarse antes de publicar

- Comprobar en el navegador que el mapa incrustado muestra exactamente el local. En caso contrario, utilizar el botón **Cómo llegar** (vinculado al Maps oficial) y reemplazar `mapsEmbedUrl` en `src/data/business.js` por la URL de inserción oficial.
- Confirmar que la propuesta de logotipo está aprobada.
- Añadir un dominio definitivo cuando exista y actualizar `seo.siteUrl` para los metadatos canónicos.
- El paquete incluye fotos pero **no videos**; la galería muestra las fotografías auténticas disponibles.

## Personalización

- Todos los datos de contacto y redes están en `src/data/business.js`.
- Los servicios están en `src/data/services.js`.
- El diseño usa Montserrat y colores azul/blanco en `src/index.css`.
