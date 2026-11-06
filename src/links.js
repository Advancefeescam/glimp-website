// Alle externe links op één plek, zodat ze makkelijk te wijzigen zijn.
const APP_REPO = 'https://github.com/Advancefeescam/glimp';

export const links = {
  repo: APP_REPO,
  download: `${import.meta.env.BASE_URL}download/`,
  releases: `${APP_REPO}/releases/latest`,
  issues: `${APP_REPO}/issues`,
};

export const sources = [
  { name: 'Transitous', role: 'Reisopties en dienstregelingen', href: 'https://transitous.org' },
  { name: 'OVAPI', role: 'Vertrekinformatie voor Nederland', href: 'http://v0.ovapi.nl/' },
  { name: 'OpenStreetMap', role: 'Kaartgegevens', href: 'https://www.openstreetmap.org/' },
  { name: 'Open-Meteo', role: 'Weer', href: 'https://open-meteo.com/' },
  { name: 'busposities.nl', role: 'Voertuigposities', href: 'https://busposities.nl/' },
];
