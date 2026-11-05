# Glimp website

De publieke productwebsite van [Glimp](https://github.com/Advancefeescam/glimp): openbaar vervoer in Nederland, overzichtelijk gepresenteerd.

> **Website:** https://advancefeescam.github.io/glimp-website/  
> **App:** https://github.com/Advancefeescam/glimp

## Designrichting

Een frisse, redactionele interpretatie van **Material 3 Expressive**. De pagina combineert lichte, rustige M3E-surfaces met een donkerblauwe, typografische hero, grote app-screenshots en een ritmische informatiehiërarchie.

- **Typografie:** zelf gehoste Manrope Variable (koppen en lopende tekst) en DM Mono (micro-labels en numerieke accenten). Grote display-koppen gebruiken bewust beperkte regelbreedtes, sterk gewicht, strakke tracking en duidelijke contrasten.
- **Kleuren:** M3E `M3eTheme` genereert de semantische kleurvariabelen uit één Glimp-blauwe seed `#4168ce`. De donkerblauwe hero en enkele illustratieve kaarten gebruiken bewust aanvullende productkleuren.
- **Componenten:** echte `@m3e/react`-componenten: Buttons, Icon Buttons, Cards, Tabs, Segmented Button, Accordion/Expansion Panel, List en Icon.
- **Screenshots:** bestaande lokale WebP's in `public/screenshots/`; er wordt geen nep-live-data getoond.
- **Responsive:** aangepaste grid-layouts voor breed desktop, tablet en kleine telefoons. De navigatie schakelt over naar een toegankelijk mobiel menu.
- **Toegankelijkheid:** semantische secties, focus-indicatoren, een skiplink, betekenisvolle alt-teksten, respect voor `prefers-reduced-motion` en echte links in plaats van klikbare divs.

De M3E-documentatie vind je op https://matraic.github.io/m3e/.

## Lokaal draaien

Node.js 22+ en npm worden gebruikt in CI.

```bash
npm ci
npm run dev
npm run build
npm run preview
```

De publicatie draait op GitHub Pages onder `/glimp-website/`. Dit staat in `vite.config.js`; voor alle screenshots en app-assets wordt `import.meta.env.BASE_URL` gebruikt.

## Projectstructuur

| Bestand | Verantwoordelijkheid |
| --- | --- |
| `src/App.jsx` | M3E-thema en compositie van secties |
| `src/components/Hero.jsx` | Introductie, download-CTA en belangrijkste screenshots |
| `src/components/Board.jsx` | Drie stappen, met M3E Cards |
| `src/components/Features.jsx` | Interactieve feature-tabs |
| `src/components/Spotlight.jsx` | Redactionele reisplannerpresentatie |
| `src/components/Themes.jsx` | Interactieve vergelijking licht/donker/OLED |
| `src/components/Sources.jsx` | Externe databronnen |
| `src/components/Install.jsx` | APK-installatie en FAQ |
| `src/styles/base.css` | Layouttokens, typografie, navigatie, footer en toegankelijkheid |
| `src/styles/sections.css` | Visuals, responsive lay-outs en secties |
| `src/links.js` | Externe links en bronvermeldingen |

## Publiceren

De GitHub Actions-workflow in `.github/workflows/deploy.yml` bouwt pull requests en publiceert **alleen na een push naar `main`**. Voor de eerste publicatie is bij GitHub Pages **Build and deployment → Source: GitHub Actions** vereist.

## Wijzigingen controleren

- Voer `npm run build` uit en controleer Vite op foutmeldingen.
- Test minimaal de breedtes **360px, 390px, 768px, 1024px en 1440px**.
- Test het mobiele menu, de functietabs, de themaschakelaar en alle download- en externe links.
- Controleer keyboard-focussen en `prefers-reduced-motion`.
- Valideer dat afbeeldingen niet worden afgesneden en voldoende scherp zijn.

De app blijft onafhankelijk van de externe databronnen; de website claimt geen gegarandeerde live-nauwkeurigheid.
