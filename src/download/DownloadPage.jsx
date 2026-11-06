import { useEffect, useState } from 'react';
import { M3eTheme } from '@m3e/react/theme';
import { M3eButton } from '@m3e/react/button';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eIcon } from '@m3e/react/icon';
import { useSiteTheme } from '../hooks/useSiteTheme';
import { architectures, fetchLatestRelease, formatSize } from './releases';
import { links } from '../links';

const home = import.meta.env.BASE_URL;

function DeviceIllustration({ id }) {
  if (id === 'x86') {
    return (
      <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
        <rect x="17" y="12" width="66" height="48" rx="5" stroke="currentColor" strokeWidth="3" />
        <rect x="23" y="18" width="54" height="36" rx="2" fill="currentColor" opacity=".12" />
        <path d="M7 65H93L87 72H13L7 65Z" fill="currentColor" opacity=".25" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M45 32L39 37L45 42M55 32L61 37L55 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === 'universal') {
    return (
      <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
        <rect x="10" y="19" width="35" height="56" rx="8" stroke="currentColor" strokeWidth="3" opacity=".55" />
        <rect x="47" y="5" width="41" height="70" rx="9" fill="currentColor" opacity=".1" stroke="currentColor" strokeWidth="3" />
        <rect x="53" y="11" width="29" height="56" rx="5" stroke="currentColor" strokeWidth="2" />
        <path d="M57 38L64 45L77 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
      <rect x="30" y="5" width="40" height="70" rx="10" stroke="currentColor" strokeWidth="3" />
      <rect x="36" y="12" width="28" height="53" rx="4" fill="currentColor" opacity=".10" />
      <rect x="39" y="25" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="2" />
      <path d="M35 30H29M35 42H29M65 30H71M65 42H71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="50" y="40" fontSize="11" fill="currentColor" textAnchor="middle" fontWeight="800">{id === 'arm64' ? '64' : '32'}</text>
    </svg>
  );
}

function ArchitectureCard({ architecture, selected, size, onClick }) {
  return (
    <button
      type="button"
      className={'architecture-card' + (selected ? ' is-selected' : '')}
      aria-pressed={selected}
      onClick={onClick}
    >
      <span className="architecture-card-top">
        <span className="architecture-illustration"><DeviceIllustration id={architecture.id} /></span>
        <span className="architecture-choice">
          {selected && <M3eIcon name="check" aria-hidden="true" />}
        </span>
      </span>
      <span className="architecture-title-row">
        <strong>{architecture.label}</strong>
        {architecture.recommended && <span className="architecture-recommended">Aanbevolen</span>}
      </span>
      <span className="architecture-subtitle">{architecture.subtitle}</span>
      <span className="architecture-bottom">
        <code>{architecture.abi}</code>
        {size ? <span>{formatSize(size)}</span> : null}
      </span>
    </button>
  );
}

function DownloadHeader({ mode, toggleTheme }) {
  return (
    <header className="header download-header">
      <div className="wrap header-bar">
        <a className="brand" href={home} aria-label="Terug naar Glimp">
          <span className="brand-icon">
            <img src={home + 'assets/glimp-icon.webp'} alt="" width="37" height="37" />
          </span>
          <span>glimp<span className="brand-period">.</span></span>
        </a>
        <nav className="download-header-actions" aria-label="Downloadnavigatie">
          <M3eIconButton
            className="scheme-toggle"
            variant="standard"
            aria-label={mode === 'dark' ? 'Licht websitethema inschakelen' : 'Donker websitethema inschakelen'}
            title={mode === 'dark' ? 'Licht thema' : 'Donker thema'}
            onClick={toggleTheme}
          >
            <M3eIcon name={mode === 'dark' ? 'light_mode' : 'dark_mode'} />
          </M3eIconButton>
          <a className="download-back-link" href={home}>Terug naar de website</a>
        </nav>
      </div>
    </header>
  );
}

export default function DownloadPage() {
  const { mode, toggleTheme } = useSiteTheme();
  const [selected, setSelected] = useState('universal');
  const [releaseState, setReleaseState] = useState({ status: 'loading', release: null });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchLatestRelease(controller.signal)
      .then((release) => setReleaseState({ status: 'ready', release }))
      .catch((error) => {
        if (error.name !== 'AbortError') setReleaseState({ status: 'unavailable', release: null });
      });
    return () => controller.abort();
  }, []);

  const architecture = architectures.find((item) => item.id === selected);
  const release = releaseState.release;
  const asset = release?.assets[selected] ?? null;
  const published = release?.publishedAt
    ? new Intl.DateTimeFormat('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(release.publishedAt))
    : null;

  async function copyDigest() {
    if (!asset?.digest || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(asset.digest);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <M3eTheme className="site download-site" data-site-theme={mode}
      color="#3b5fd0" scheme={mode} variant="tonal-spot" motion="expressive">
      <DownloadHeader mode={mode} toggleTheme={toggleTheme} />
      <main className="download-main" id="main">
        <div className="wrap">
          <a className="download-breadcrumb" href={home}>
            <span aria-hidden="true">←</span> Terug naar Glimp
          </a>

          <div className="download-page-intro">
            <div>
              <p className="download-kicker">GLIMP VOOR ANDROID</p>
              <h1>Jouw apparaat.<br /><span>Jouw download.</span></h1>
              <p className="download-page-lead">
                Kies het installatiebestand dat past bij je toestel. Geen idee welke architectuur je hebt?
                Kies <strong>Universal</strong> — die is het eenvoudigst.
              </p>
            </div>
            <div className="download-current-release" aria-live="polite">
              <span className="download-current-label">GitHub Release</span>
              <strong>{release ? release.version : releaseState.status === 'loading' ? 'Controleren…' : 'Niet publiek beschikbaar'}</strong>
              <span>{published || (releaseState.status === 'ready' ? 'Beschikbare APK-bestanden' : 'Status afhankelijk van GitHub-toegang')}</span>
            </div>
          </div>

          <div className="download-page-layout">
            <section className="download-architectures" aria-labelledby="architecture-heading">
              <div className="download-heading-group">
                <h2 id="architecture-heading">Kies je architectuur</h2>
                <p>Vier varianten, één Glimp. De keuze verandert welk APK-bestand je opent.</p>
              </div>
              <div className="architecture-grid" role="group" aria-label="Android-architectuur kiezen">
                {architectures.map((item) => (
                  <ArchitectureCard
                    key={item.id}
                    architecture={item}
                    selected={item.id === selected}
                    size={release?.assets[item.id]?.size}
                    onClick={() => { setSelected(item.id); setCopied(false); }}
                  />
                ))}
              </div>
              <p className="download-architecture-help">
                <M3eIcon name="info" aria-hidden="true" />
                Gebruik je een gewone moderne Android-telefoon? Dan is ARM64 meestal passend.
                Universal is het veiligste startpunt als je twijfelt.
              </p>
            </section>

            <aside className="download-summary" aria-labelledby="chosen-heading">
              <div className="download-summary-head">
                <span className="download-summary-eyebrow">JOUW SELECTIE</span>
                <div className="download-summary-art"><DeviceIllustration id={selected} /></div>
                <h2 id="chosen-heading">{architecture.label}</h2>
                <p>{architecture.detail}</p>
              </div>
              <div className="download-file-details">
                <div><span>Architectuur</span><strong>{architecture.abi}</strong></div>
                <div><span>Bestand</span><strong>{asset?.name || 'APK (GitHub Releases)'}</strong></div>
                {asset && <div><span>Grootte</span><strong>{formatSize(asset.size)}</strong></div>}
              </div>
              {releaseState.status === 'ready' && asset ? (
                <M3eButton className="download-primary-action" variant="filled" size="large"
                  href={asset.url} target="_blank" rel="noopener noreferrer">
                  <M3eIcon slot="icon" name="download" />
                  Download APK
                </M3eButton>
              ) : (
                <M3eButton className="download-primary-action" variant="filled" size="large"
                  href={links.releases} target="_blank" rel="noopener noreferrer">
                  <M3eIcon slot="icon" name="arrow_outward" />
                  Open GitHub Releases
                </M3eButton>
              )}
              {releaseState.status === 'loading' && (
                <p className="download-availability" role="status">GitHub-bestanden worden gecontroleerd…</p>
              )}
              {releaseState.status === 'unavailable' && (
                <p className="download-availability" role="status">
                  De releases zijn niet publiek opvraagbaar. Mogelijk is de app-repository privé.
                  Op GitHub kun je naar <code>*-{architecture.abi}.apk</code> zoeken als je toegang hebt.
                </p>
              )}
              {releaseState.status === 'ready' && !asset && (
                <p className="download-availability" role="status">
                  Voor {architecture.abi} staat geen APK in deze release. Bekijk de andere keuzes.
                </p>
              )}
              {releaseState.status === 'ready' && asset && (
                <p className="download-availability">Dit is de bestandslink uit de officiële GitHub-release.</p>
              )}
              {asset?.digest && (
                <details className="download-checksum">
                  <summary>SHA-256-controlesom</summary>
                  <code>{asset.digest}</code>
                  <button type="button" onClick={copyDigest}>{copied ? 'Gekopieerd' : 'Kopieer hash'}</button>
                </details>
              )}
            </aside>
          </div>

          <section className="download-aftercare" aria-labelledby="install-heading">
            <div className="download-aftercare-intro">
              <p className="download-kicker">INSTALLEREN</p>
              <h2 id="install-heading">Van APK naar je startscherm.</h2>
              <p>Download via de officiële release en volg de Android-instructies. Voor installatie buiten een appwinkel kan Android om toestemming vragen.</p>
            </div>
            <ol className="download-aftercare-steps">
              <li><span>01</span><strong>Download het APK-bestand</strong><p>Kies hierboven je architectuur en open het bestand vanuit GitHub.</p></li>
              <li><span>02</span><strong>Open het op Android</strong><p>Open het gedownloade bestand. Geef zo nodig toestemming aan je browser of bestandsbeheerder.</p></li>
              <li><span>03</span><strong>Start Glimp</strong><p>Na installatie staat Glimp tussen je apps. Controleer de bron voordat je een APK installeert.</p></li>
            </ol>
          </section>
        </div>
      </main>
      <footer className="download-page-footer">
        <div className="wrap download-footer-content">
          <span>Glimp — Je reis, in één oogopslag.</span>
          <nav aria-label="Links">
            <a href={home}>Website</a>
            <a href={links.releases} target="_blank" rel="noopener noreferrer">GitHub Releases</a>
            <a href={links.repo} target="_blank" rel="noopener noreferrer">Broncode</a>
          </nav>
        </div>
      </footer>
    </M3eTheme>
  );
}
