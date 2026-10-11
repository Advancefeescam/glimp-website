import { useEffect, useRef, useState } from 'react';
import { M3eButton } from '@m3e/react/button';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eIcon } from '@m3e/react/icon';
import { M3eActionList, M3eListAction } from '@m3e/react/list';
import { links } from '../links';
import { useScrollSpy } from '../hooks/useScrollSpy';

const nav = [
  { id: 'functies', label: 'Functies', icon: 'map' },
  { id: 'weergave', label: 'Weergave', icon: 'palette' },
  { id: 'gegevens', label: 'Gegevens', icon: 'database' },
  { id: 'installeren', label: 'Installeren', icon: 'download' },
];
const ids = nav.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);
  const headerRef = useRef(null);
  const btnRef = useRef(null);
  const sheetRef = useRef(null);
  const close = () => setOpen(false);

  // Sluit het menu met Escape, bij een tik ernaast en als het scherm breed wordt.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 861px)');
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  // Een tik op een menu-item sluit het menu. Capture-fase en composedPath, want de link zit
  // in de shadow DOM van het M3E-onderdeel en de klik wordt daar soms niet doorgegeven.
  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return;
    const onClick = (e) => {
      if (e.composedPath().some((n) => n.localName === 'm3e-list-action')) setOpen(false);
    };
    el.addEventListener('click', onClick, true);
    return () => el.removeEventListener('click', onClick, true);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <a className="skip" href="#main">Naar de inhoud</a>
      <div className="header-bar wrap">
        <a className="brand" href="#top" onClick={close} aria-label="Glimp, naar boven">
          <img src={`${import.meta.env.BASE_URL}assets/glimp-icon-192.png`} alt="" width="36" height="36" />
          <span>glimp</span>
        </a>

        <nav className="nav" aria-label="Hoofdnavigatie">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <M3eButton
            className="cta-wide"
            variant="filled"
            size="small"
            href={links.releases}
            target="_blank"
            rel="noreferrer"
          >
            <M3eIcon slot="icon" name="download" />
            Download
          </M3eButton>
          <M3eIconButton
            className="cta-icon"
            variant="filled"
            aria-label="Download Glimp (opent GitHub)"
            href={links.releases}
            target="_blank"
            rel="noreferrer"
          >
            <M3eIcon name="download" />
          </M3eIconButton>
          <M3eIconButton
            ref={btnRef}
            className="menu-btn"
            variant="tonal"
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <M3eIcon name={open ? 'close' : 'menu'} />
          </M3eIconButton>
        </div>
      </div>

      <nav
        id="mobiel-menu"
        className="menu-sheet"
        aria-label="Mobiel menu"
        data-open={open}
        hidden={!open}
        ref={sheetRef}
      >
        <M3eActionList>
          {nav.map((n) => (
            <M3eListAction key={n.id} href={`#${n.id}`}>
              <M3eIcon slot="leading" name={n.icon} />
              {n.label}
            </M3eListAction>
          ))}
        </M3eActionList>
      </nav>
    </header>
  );
}
