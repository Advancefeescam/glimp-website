# Bijdragen aan de Glimp-website

Bedankt dat je de website wilt verbeteren! Dit project is de **React/Vite-productwebsite**, niet de Android-app. Problemen met de routeplanner, haltegegevens of de APK horen bij het [aparte Glimp-app-project](https://github.com/Advancefeescam/glimp), niet bij de code in deze repository.

## Eerste stappen

1. Controleer of je vraag of probleem over de **website** gaat (tekst, layout, mobiele weergave, navigatie, thema's, links of toegankelijkheid).
2. Kijk of er al een [website-issue](https://github.com/Advancefeescam/glimp-website/issues) bestaat.
3. Maak voor een fix of verbetering een nieuwe branch vanaf `main`.
4. Houd de wijziging gericht; een stylingfix hoeft niet ook de buildworkflow te veranderen.
5. Test lokaal en open een PR naar `main`.

### Lokale ontwikkelomgeving

Gebruik **Node.js 22** en npm:

~~~bash
git clone https://github.com/Advancefeescam/glimp-website.git
cd glimp-website
npm ci
npm run dev
~~~

Gebruik de URL die Vite in de terminal geeft; de site heeft het basepad `/glimp-website/`.

Voor je een PR opent:

~~~bash
npm run build
~~~

De GitHub Actions-workflow draait `npm ci` en `npm run build` opnieuw. Alleen een geslaagde build is **geen** bewijs dat de website er goed uitziet; controleer daarom zelf de layout.

## Waarop letten bij een wijziging?

- **M3E:** gebruik de bestaande Material 3 Expressive-componenten voor interacties en maak geen onnodige custom knoppen, tabs of accordions.
- **Typografie:** Manrope Variable voor tekst en koppen, DM Mono voor kleine technische labels. Gebruik de typografische schaal en tokens in `src/styles/base.css`.
- **Kleur en dark mode:** pas bestaande CSS-variabelen aan waar mogelijk en test de website in licht én donker.
- **Responsiveness:** controleer bijvoorbeeld 360, 390, 768 en 1440 pixels breed. Vermijd horizontaal scrollen, afgesneden knoppen en teksten die door lijnen lopen.
- **Toegankelijkheid:** semantische HTML, focusindicatoren, toetsenbordnavigatie, alt-teksten en respect voor `prefers-reduced-motion`.
- **Screenshots:** behoud de intrinsieke verhouding. Sommige thema-afbeeldingen zijn vierkante onboarding-uitsneden, geen volledige telefoonschermen.
- **Inhoud:** gebruik controleerbare informatie. Verzin geen realtime vertrektijden, dekking of productfuncties die nog niet bestaan.
- **Downloads:** wijzig links in `src/links.js`. Controleer of de doelbestemming toegankelijk is voor bezoekers; de app-repository kan privé zijn.
- **Merkgebruik:** zie [TRADEMARKS.md](TRADEMARKS.md).

## Bugs melden

Gebruik het [websitebugformulier](https://github.com/Advancefeescam/glimp-website/issues/new/choose). Beschrijf wat je zag, wat je verwachtte, hoe het te reproduceren is en op welk apparaat/browser je testte. Screenshots zijn welkom, maar deel geen tokens, privégegevens of inloggegevens.

Voor een **appbug** is dit niet de juiste plek: een crash in de Android-app is niet op te lossen in deze websitecode. De app-repository is mogelijk niet publiek toegankelijk.

## Pull requests

Schrijf kort op **wat** je verandert en **waarom**, voeg bij zichtbare aanpassingen bij voorkeur voor/na-screenshots toe, en vermeld hoe je de wijziging getest hebt. Gebruik het PR-sjabloon.

PR's gaan naar `main`. Die branch publiceert automatisch naar GitHub Pages zodra de wijziging gemerged wordt. **Geen rechtstreekse push naar `main` voor gewone wijzigingen.**

## Licentie

Door een bijdrage aan deze websitecode te leveren, ga je ermee akkoord dat deze onder dezelfde [GPL-3.0-only](LICENSE) kan worden aangeboden. Voeg alleen code en materialen toe waarvoor je de benodigde rechten hebt, en behoud auteursrecht- en licentievermeldingen van anderen.
