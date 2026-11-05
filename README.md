<div align="center">
  <img src="public/assets/glimp-icon-192.png" width="104" height="104" alt="Glimp-appicoon">
  <h1>Glimp · Website</h1>
  <p><strong>De website achter Glimp. Niet de Android-app zelf.</strong></p>
  <p>De plek waar je Glimp ontdekt — gebouwd met React, Vite en Material 3 Expressive.</p>
  <p>
    <a href="https://advancefeescam.github.io/glimp-website/"><strong>Bekijk de website</strong></a>
    · <a href="https://github.com/Advancefeescam/glimp">Glimp-app</a>
    · <a href="https://github.com/Advancefeescam/glimp/releases">Android-releases</a>
    · <a href="CONTRIBUTING.md">Bijdragen</a>
  </p>
  <p>
    <a href="https://github.com/Advancefeescam/glimp-website/actions/workflows/deploy.yml"><img src="https://github.com/Advancefeescam/glimp-website/actions/workflows/deploy.yml/badge.svg?branch=main" alt="GitHub Pages buildstatus"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0--only-395ab5?style=flat-square" alt="Licentie: GPL-3.0-only"></a>
    <img src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white" alt="React 19">
    <img src="https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite 8">
    <img src="https://img.shields.io/badge/Material-3%20Expressive-6750a4?style=flat-square" alt="Material 3 Expressive">
  </p>
</div>

---

> [!IMPORTANT]
> ### Op zoek naar de Glimp-app? Dan zit je in de verkeerde repository. 😄
> **Dit is `glimp-website`: de broncode van de promotionele website.** Hier staan geen Android-projectbestanden, geen routeplanner-backend, geen APK's en geen app-releases.
>
> - **De website gebruiken:** [Glimp-website openen](https://advancefeescam.github.io/glimp-website/)
> - **De app zelf:** [Advancefeescam/glimp](https://github.com/Advancefeescam/glimp)
> - **APK's en releases:** [Glimp-releases](https://github.com/Advancefeescam/glimp/releases)
>
> De app-repository is momenteel privé. Zonder toegang kan GitHub bij de app- en releaselinks een **404** tonen. Die bestanden zijn niet aanwezig in deze website-repository.

## Waar gaat deze repository over?

**Glimp** is een kaartgerichte Android-app voor het Nederlandse openbaar vervoer. **Deze repository** bevat de publieke productwebsite: een plek om de app te laten zien en uit te leggen wat hij doet. *Je reis, in één oogopslag* is de herkenbare Glimp-slogan; *Je volgende rit. Al in beeld.* is de headline van de website.

De website is bewust **geen werkende OV-app**: hij haalt geen live vertrektijden op, plant geen echte reizen en biedt geen ingebouwde routeplanner. Schermafbeeldingen zijn statische voorbeelden; een themademonstratie kan illustratief zijn.

| | Wat zit hierin? |
| --- | --- |
| **Productwebsite** | Landingpage, functies, app-voorbeelden, thema-preview, databronnen, installatie-uitleg en FAQ |
| **Techniek** | React 19, Vite 8, M3E React/Web Components, lokale Manrope- en DM Mono-fonts |
| **Publicatie** | GitHub Pages via GitHub Actions |
| **Niet inbegrepen** | De Android-app, Capacitor-project, native widgets, GTFS/OV-backend, APK's en app-bugfixes |

## Zo is de website opgebouwd

De site gebruikt **Material 3 Expressive** waar interactie nodig is: theming, knoppen, tabs, segmented buttons, iconen en uitklapbare FAQ's. De vrije, redactionele layouts zijn gemaakt met semantische React-componenten en CSS.

- **Aparte desktop- en mobiele presentatie:** op desktop een rustige hero met twee echte Glimp-schermen en interactieve M3E-functietabs; op mobiel één groot screenshot en vier direct leesbare functiekaarten zonder kleine tabs.
- **Bewust terughoudend ontwerp:** geen nepstatus, decoratieve vertrekcijfers of overbodige labels; de echte app-schermen staan centraal.
- **Licht, donker en OLED:** interactieve, illustratieve thema-preview. Dit staat los van het lichte/donkere **website**-thema.
- **Databronnen:** uitleg welke externe diensten worden gebruikt en waarom informatie kan afwijken.
- **Download en FAQ:** uitleg over Android-installatie en links naar releases.
- **Toegankelijkheid:** leesbare typografie, skiplink, toetsenbordfocus, alt-teksten en respect voor minder beweging.

### Projectstructuur

~~~text
glimp-website/
├── .github/
│   ├── ISSUE_TEMPLATE/      # Meldingen voor deze website
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/deploy.yml # CI-build + GitHub Pages
├── public/
│   ├── assets/              # Glimp-branding
│   └── screenshots/         # Statische app-voorbeelden
├── src/
│   ├── App.jsx              # Paginaopbouw en website-thema
│   ├── components/          # Hero, Features, Themes, Install...
│   ├── hooks/               # Scroll en responsive utilities
│   ├── icons.js             # M3E-icon imports
│   ├── links.js             # Externe links en databronnen
│   └── styles/
│       ├── base.css         # Kleurrollen, typografie, navigatie
│       └── sections.css     # Paginasecties en responsive ontwerp
├── index.html               # Metadata, Open Graph, favicon
├── vite.config.js           # GitHub Pages-basepad
├── LICENSE                  # GPL-3.0-only (websitecode)
└── TRADEMARKS.md            # Naam, logo en merkgebruik
~~~

## Zelf draaien

Voor de **website** heb je Node.js **22** en npm nodig. Java, Android Studio, Gradle en een Android-telefoon zijn hier **niet** nodig.

~~~bash
git clone https://github.com/Advancefeescam/glimp-website.git
cd glimp-website
npm ci
npm run dev
~~~

Open de URL die Vite in je terminal toont. De website gebruikt het GitHub Pages-basepad `/glimp-website/`; gebruik dus de getoonde URL inclusief dat pad.

| Commando | Functie |
| --- | --- |
| `npm ci` | Installeer de versies uit `package-lock.json` |
| `npm run dev` | Start Vite met live herladen |
| `npm run build` | Maak de productiebuild in `dist/` |
| `npm run preview` | Bekijk de productiebuild lokaal |

Voor een wijziging of PR is **`npm ci && npm run build`** de minimale technische controle. Test de pagina daarnaast bij verschillende breedtes en met het toetsenbord.

## Aanpassen zonder dingen te breken

| Je wilt... | Kijk in... |
| --- | --- |
| Tekst, koppen of secties wijzigen | `src/components/` |
| Download-/GitHub-links wijzigen | `src/links.js` |
| De website in licht/donker stylen | `src/App.jsx` en `src/styles/base.css` |
| Typografie, spacing en responsive layout verbeteren | `src/styles/base.css` en `src/styles/sections.css` |
| M3E-iconen gebruiken | `src/icons.js` |
| Nieuwe app-screenshots toevoegen | `public/screenshots/` |
| Het logo vervangen | `public/assets/` en `public/favicon.png` |
| SEO/Open Graph wijzigen | `index.html` |
| De build/deployment aanpassen | `.github/workflows/deploy.yml` |

**Ontwerpafspraken:** gebruik de bestaande CSS-kleurtokens, respecteer de M3E-componenten en voorkom afzonderlijke styling-systemen voor hetzelfde onderdeel. Verander niet zomaar de verhouding van een screenshot: de telefoonbeelden zijn staand, terwijl sommige onboarding-assets vierkante uitsneden zijn. Vervang geen echte screenshots door fictieve realtime OV-informatie.

## GitHub Pages en deployment

De site staat op **[advancefeescam.github.io/glimp-website](https://advancefeescam.github.io/glimp-website/)**.

1. Bij een **pull request naar `main`** controleert GitHub Actions de installatie (`npm ci`) en productiebuild (`npm run build`). Dit publiceert niets.
2. Bij een **push of merge naar `main`** draait dezelfde build en volgt een GitHub Pages-deployment.
3. De gegenereerde bestanden komen uit `dist/`. Vite gebruikt het basepad `/glimp-website/`, dus links naar lokale assets moeten ook onder dat pad werken.

De workflow staat in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). GitHub Pages moet onder *Settings → Pages → Build and deployment* op **GitHub Actions** staan.

> [!NOTE]
> Wil je de website veilig onderhouden? Schakel voor `main` een branch ruleset in met **verbod op force pushes en verwijdering**, pull requests en een verplichte geslaagde `build`-check. Dit moet een repositorybeheerder in GitHub Settings instellen; een README op zichzelf beschermt de branch niet.

## Feedback, bugs en bijdragen

- **Fout in deze website** (layout, tekst, link, toegankelijkheid, mobiel menu, thema): [open een website-issue](https://github.com/Advancefeescam/glimp-website/issues/new/choose).
- **Idee voor deze website:** gebruik het website-verbeterformulier in dezelfde issuekiezer.
- **Bug in de echte Glimp-app** (haltegegevens, routeplanner, kaarten, APK, crash): hoort bij de **[aparte app-repository](https://github.com/Advancefeescam/glimp)** en **niet** bij dit websiteproject. Heb je geen toegang tot die privé-repository, dan kun je daar geen issue openen; maak van een website-issue geen publiek crashlog met privégegevens.

Wil je bijdragen? Bekijk [**CONTRIBUTING.md**](CONTRIBUTING.md) voor de workflow, checks en voorbeelden van goede bugmeldingen.

## Licentie en branding

De **oorspronkelijke broncode van deze website** wordt aangeboden onder **[GNU GPL v3.0-only](LICENSE)**. Je mag de code onder de GPL-voorwaarden gebruiken, wijzigen en distribueren, ook commercieel. Wie een gewijzigde versie verspreidt, moet aan de bijbehorende GPL-verplichtingen voldoen.

De **naam Glimp, het logo en de indruk van officiële uitgaven** zijn een andere kwestie. De GPL verleent geen automatische toestemming om een fork als de officiële Glimp-website of -app te presenteren. Zie **[TRADEMARKS.md](TRADEMARKS.md)**. Rechten op eventuele materialen van derden (waaronder lettertypen, afhankelijkheden en databronnen) blijven van toepassing; een licentie voor onze broncode verleent niet automatisch rechten op materiaal dat niet van ons is.

**Deze licentie geldt voor de websitecode.** De Android-app staat in een aparte repository en heeft zijn eigen licentie- en publicatiestatus. Deze repository geeft niet automatisch rechten op die app.

---

<div align="center">

**Glimp — je reis, in één oogopslag.**

[Website](https://advancefeescam.github.io/glimp-website/) · [App-repository](https://github.com/Advancefeescam/glimp) · [Website-issues](https://github.com/Advancefeescam/glimp-website/issues) · [Bijdragen](CONTRIBUTING.md)

</div>
