# Glimp · website

Productwebsite voor [Glimp](https://github.com/Advancefeescam/glimp), een kaartgerichte Android-app voor het Nederlandse openbaar vervoer.

De website is ontwikkeld met **React 19, Vite 8 en Material 3 Expressive** ([M3E](https://matraic.github.io/m3e/)). Het is een interactieve, Nederlandstalige landingpage met echte screenshots uit de app.

## Ontwerp

- **Typografie:** lokaal gebundelde Manrope Variable voor display en interface, DM Mono voor route- en sectielabels. Schaal en regelhoogte passen zich aan het scherm aan.
- **Theming:** een echt licht en donker webthema met CSS-tokens en M3E-dynamische kleuren. De schakelaar in de navigatie bewaart de keuze indien opslag is toegestaan.
- **Componenten:** M3E knoppen, icon buttons, tabs, segmented buttons, theming en accordion voor interactieve onderdelen.
- **Beweging:** subtiele scroll reveal en decoratie met respect voor \`prefers-reduced-motion\`.
- **Responsive:** andere composities voor desktop, tablet en mobiel. De app-screenshots blijven leesbaar en de pagina toont nooit verzonnen live OV-data.
- **Toegankelijkheid:** semantische secties, focusindicatoren, skiplink, toegankelijke navigatie, contrast en alt-teksten.

## Lokaal draaien

Vereist: Node.js 22 en npm.

~~~bash
npm ci
npm run dev
npm run build
npm run preview
~~~

De productiebuild staat in \`dist/\` en gebruikt de Vite-base \`/glimp-website/\`. De site kan ook lokaal onder die prefix worden bekeken. De scripts staan in \`package.json\`.

## Waar pas je iets aan?

| Onderdeel | Bestand |
| --- | --- |
| Kleurrollen, typografie, header en footer | \`src/styles/base.css\` |
| Lay-out, schermen, responsive styling | \`src/styles/sections.css\` |
| Licht/donker webthema | \`src/App.jsx\` |
| Functies, schermteksten, FAQ | \`src/components/\` |
| Download, GitHub, databronnen | \`src/links.js\` |
| Material-icoonregistraties | \`src/icons.js\` |
| Screenshots en merkbestanden | \`public/screenshots/\` en \`public/assets/\` |
| Metadata en favicon | \`index.html\` |

M3E is de basis voor interactieve UI, maar een productwebsite gebruikt daarnaast bewust gewone HTML-secties en CSS voor vrije redactionele lay-out. Probeer niet elk decoratief vlak te vervangen door een appcomponent.

## Beelden en inhoud

De screenshots in \`public/screenshots/\` zijn **statische voorbeelden** uit Glimp, geen live demo. De app en de beschikbaarheid van reisgegevens kunnen na verloop van tijd veranderen. Actualiseer de screenshots en tekst samen.

De website belooft geen volledige realtime dekking: gegevens komen van externe aanbieders en kunnen ontbreken of afwijken.

## Deploy

GitHub Actions draait bij PR's een productiebuild en publiceert de site bij een push naar \`main\`. De workflow staat in \`.github/workflows/deploy.yml\`.

De site wordt gepubliceerd op:

https://advancefeescam.github.io/glimp-website/

Voor de eerste publicatie: **Settings → Pages → Build and deployment → GitHub Actions**.

Wijzigingen aan ontwerp of content: werk op een featurebranch en open een PR naar \`main\`. Merge pas na een succesvolle build en een visuele controle op kleine én grote schermen.
