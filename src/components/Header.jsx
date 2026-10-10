import { useState } from 'react';
import { M3eButton } from '@m3e/react/button';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eIcon } from '@m3e/react/icon';
import { links } from '../links';

const nav = [
  { href: '#functies', label: 'Functies' },
  { href: '#weergave', label: 'Weergave' },
  { href: '#gegevens', label: 'Gegevens' },
  { href: '#installeren', label: 'Installeren' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <a className="skip" href="#main">Naar de inhoud</a>
      <div className="header-bar wrap">
        <a className="brand" href="#top" onClick={close} aria-label="Glimp, naar boven">
          <img src={`${import.meta.env.BASE_URL}assets/glimp-icon-192.png`} alt="" width="34" height="34" />
          <span>glimp</span>
        </a>

        <nav className="nav" aria-label="Hoofdnavigatie">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <M3eButton
            className="header-cta"
            variant="tonal"
            size="small"
            href={links.releases}
            target="_blank"
            rel="noreferrer"
          >
            <M3eIcon slot="icon" name="download" />
            Download
          </M3eButton>
          <M3eIconButton
            className="menu-btn"
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
        className="mobile-nav"
        aria-label="Mobiel menu"
        data-open={open}
        hidden={!open}
      >
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={close}>
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
