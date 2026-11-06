// Public GitHub API only: no secrets or tokens shipped to the website.
// A private repository cannot expose release assets to anonymous visitors.
const API_URL = 'https://api.github.com/repos/Advancefeescam/glimp/releases/latest';

export const architectures = [
  {
    id: 'universal',
    label: 'Universal',
    abi: 'universal',
    subtitle: 'Werkt op de meeste ondersteunde Android-apparaten',
    detail: 'De veiligste keuze als je de architectuur van je telefoon niet weet.',
    hint: 'Grotere APK · breedste compatibiliteit',
    recommended: true,
  },
  {
    id: 'arm64',
    label: 'ARM64',
    abi: 'arm64-v8a',
    subtitle: 'Moderne Android-telefoons en tablets',
    detail: 'Geschikt voor de meeste recente Android-toestellen met een 64-bit ARM-processor.',
    hint: '64-bit ARM · meestal kleiner',
  },
  {
    id: 'armv7',
    label: 'ARMv7',
    abi: 'armeabi-v7a',
    subtitle: 'Oudere 32-bit Android-apparaten',
    detail: 'Voor oudere apparaten die geen 64-bit ARM-apps ondersteunen.',
    hint: '32-bit ARM',
  },
  {
    id: 'x86',
    label: 'x86_64',
    abi: 'x86_64',
    subtitle: 'Android-emulators en bepaalde Intel-apparaten',
    detail: 'Voor een 64-bit x86 Android-omgeving, meestal een emulator of speciaal apparaat.',
    hint: '64-bit Intel / AMD',
  },
];

function matchesArchitecture(filename, abi) {
  // GitHub release assets have names like Glimp-v2.9.5-arm64-v8a.apk.
  // A suffix match avoids confusing ARM64 with ARMv7.
  const name = filename.toLowerCase();
  return name.endsWith('-' + abi + '.apk');
}

export async function fetchLatestRelease(signal) {
  const response = await fetch(API_URL, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!response.ok) throw new Error('Releasegegevens niet publiek opvraagbaar');

  const data = await response.json();
  if (!data || !Array.isArray(data.assets) || !data.tag_name) {
    throw new Error('GitHub stuurde geen bruikbare releasedata terug');
  }

  const assets = Object.fromEntries(architectures.map((architecture) => {
    const asset = data.assets.find((entry) =>
      entry?.state === 'uploaded'
      && typeof entry.name === 'string'
      && matchesArchitecture(entry.name, architecture.abi)
      && typeof entry.browser_download_url === 'string'
      && entry.browser_download_url.startsWith('https://github.com/Advancefeescam/glimp/releases/download/')
    );
    return [architecture.id, asset ? {
      name: asset.name,
      url: asset.browser_download_url,
      size: Number(asset.size) || 0,
      digest: /^sha256:[a-f0-9]{64}$/i.test(asset.digest || '') ? asset.digest.slice(7) : null,
    } : null];
  }));

  return {
    version: data.tag_name,
    publishedAt: data.published_at,
    url: data.html_url,
    assets,
  };
}

export function formatSize(bytes) {
  if (!bytes || bytes < 0) return 'Onbekend';
  return (bytes / 1048576).toLocaleString('nl-NL', { maximumFractionDigits: 1 }) + ' MB';
}
