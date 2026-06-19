# From $0 → Investor — Landing Page

Landing de venta para el producto de Hotmart "From $0 → Investor" (guía de inversión).

## Stack
- Vite + React + Tailwind CSS
- GSAP + ScrollTrigger (animación), Lenis (smooth scroll), lucide-react (iconos)
- Deploy: GitHub Pages vía GitHub Actions. `base` en vite.config = '/From_0_to_Investor/'

## Marca (Daily Duty Institute)
- Navy 950 #0B0E1A · Navy 900 #1a1a2e · Ivory #F4F0E6
- Gold #FFB800 (cifras/riqueza) · Teal #00e6c7 (CTAs/curva) · Slate #8A93A8 (texto sec.)
- Tipografía: serif display (Fraunces) para titulares+cifras, grotesk (Inter) para body, mono (Space Mono) para datos/tickers.

## Reglas de diseño
- Elemento firma: "Equity Curve" — un SVG path que se dibuja con el scroll (stroke-dashoffset + ScrollTrigger) y conecta todas las secciones, de $0 (hero) a CTA final. NO usar plugins pagos de GSAP.
- Toda la audacia en la curva; el resto quieto y limpio.
- Respetar prefers-reduced-motion, focus visible, responsive hasta 360px.
- Performance primero: nada de librerías pesadas de partículas.

## Link de checkout (no cambiar)
https://pay.hotmart.com/S103203527C?bid=1764518330085
Todos los CTA de compra apuntan acá y abren en nueva pestaña.

## Convenciones
- Textos, precio y links centralizados en src/lib/constants.js
- Cada sección = un componente en src/components/sections/
- Efectos reutilizables en src/components/effects/
