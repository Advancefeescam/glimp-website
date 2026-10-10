# Glimp website

Productwebsite voor [Glimp](https://github.com/Advancefeescam/glimp), een kaartgerichte Android-app voor het Nederlandse openbaar vervoer.

Gebouwd met React, Vite en [M3E](https://github.com/matraic/m3e) (Material 3 Expressive web components). Het M3E-thema wordt gegenereerd uit één basiskleur in `src/App.jsx`; tabs, segmented button, accordeon, knoppen en iconen komen uit M3E.

## Lokaal draaien

```bash
npm ci
npm run dev      # ontwikkelserver
npm run build    # productiebuild naar dist/
```

De site draait onder `/glimp-website/` (zie `base` in `vite.config.js`).

## Publiceren

Elke push naar `main` bouwt en publiceert de site via GitHub Actions (`.github/workflows/deploy.yml`).

Eenmalig instellen: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Inhoud aanpassen

- Links (download, issues, databronnen): `src/links.js`
- Teksten per sectie: `src/components/`
- Screenshots en icoon: `public/screenshots/` en `public/assets/` (webp, 620 px breed)
- Kleuren en lay-out: `src/styles/`
