# Damodar Dental Care

A premium, artisanal React website for Damodar Dental Care in Margao, Goa.
Built with Vite, React Router v6, GSAP (ScrollTrigger), Framer Motion, and CSS Modules.

## How to run locally

1. Ensure you have Node.js installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Swapping Placeholder Images

All image paths are centralized in `src/assets/images/index.js`.
Currently, they use `picsum.photos` placeholders.
When you receive the real clinic photos:
1. Place the real images inside the `src/assets/images/` folder (or public folder).
2. Update the export paths in `src/assets/images/index.js` to point to the new local files (e.g., `import heroBg from './hero-bg.jpg'; export const HERO_IMAGE = heroBg;`).

## Updating Contact Details (Phone / WhatsApp / Maps)

All global constants like phone numbers, exact addresses, and map links are stored in one place:
`src/lib/constants.js`

- **Phone/WhatsApp:** Update the `PHONE` and `WHATSAPP_NUMBER` strings.
- **Maps:** To change the Google Maps embed, go to Google Maps -> Share -> Embed a map, copy the `src="..."` URL, and paste it into `MAPS_EMBED` in `constants.js`.

## Folder Structure Guide

- `public/`: Static assets that don't need processing (robots, sitemap, manifest, favicon).
- `src/assets/`: Images and icons.
- `src/components/`: Reusable, generic UI atoms (`Button`, `ScrollReveal`, `SvgDivider`).
- `src/features/`: Feature-specific modules (e.g., `Hero`, `About`, `Services`). Each contains its own `.jsx` and `.module.css`.
- `src/hooks/`: Custom React hooks (`useInView`, `useScrollProgress`, `useMousePosition`).
- `src/lib/`: Global constants and library initializations (like GSAP).
- `src/pages/`: Route-level pages that assemble features.
- `src/seo/`: Helmet configurations, default meta tags, and JSON-LD schema components.
- `src/styles/`: Global CSS tokens, resets, typography scale, and keyframe animations.
