import { useEffect, useRef, useState } from 'react';
import { M3eButton } from '@m3e/react/button';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eIcon } from '@m3e/react/icon';
import { links } from '../links';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navigation = [
  { id: 'functies', label: 'Functies' },
  { id: 'weergave', label: 'Thema’s' },
  { id: 'gegevens', label: 'Databronnen' },
  { id: 'installeren', label: 'Installeren' },
];
const sectionIds = navigation.map((item) => item.id);

export default function Header({ mode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setMenuOpen(false);
    };
    const mq = window.matchMedia('(min-width: 901px)');
    const onWidthChange = () => { if (mq.matches) setMenuOpen(false); };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onOutside);
    mq.addEventListener('change', onWidthChange);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onOutside);
      mq.removeEventListener('change', onWidthChange);
    };
  }, [menuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <a className="skip" href="#main">Direct naar de inhoud</a>
      <div className="wrap header-bar">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="Glimp — naar het begin">
          <span className="brand-icon">
            <img src={import.meta.env.BASE_URL + 'assets/glimp-icon.webp'} alt="" width="37" height="37" />
          </span>
          <span>glimp<span className="brand-period">.</span></span>
        </a>

        <nav className="nav" aria-label="Hoofdnavigatie">
          {navigation.map((item) => (
            <a key={item.id} href={'#' + item.id} aria-current={active === item.id ? 'location' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <M3eIconButton
            className="scheme-toggle"
            variant="standard"
            aria-label={mode === 'dark' ? 'Licht websitethema inschakelen' : 'Donker websitethema inschakelen'}
            title={mode === 'dark' ? 'Licht thema' : 'Donker thema'}
            onClick={onToggleTheme}
          >
            <M3eIcon name={mode === 'dark' ? 'light_mode' : 'dark_mode'} />
          </M3eIconButton>

          <M3eButton className="header-download" variant="filled" size="small"
            href={links.releases} target="_blank" rel="noopener noreferrer">
            <M3eIcon slot="icon" name="download" />
            Download Glimp
          </M3eButton>

          <M3eButton className="mobile-download" variant="tonal" size="small"
            href={links.releases} target="_blank" rel="noopener noreferrer">
            APK
          </M3eButton>

          <M3eIconButton
            ref={menuButtonRef}
            className="menu-btn"
            variant="standard"
            aria-label={menuOpen ? 'Navigatiemenu sluiten' : 'Navigatiemenu openen'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <M3eIcon name={menuOpen ? 'close' : 'menu'} />
          </M3eIconButton>
        </div>
      </div>

      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobiele navigatie" hidden={!menuOpen}>
        {navigation.map((item) => (
          <a
            href={'#' + item.id}
            key={item.id}
            onClick={() => setMenuOpen(false)}
            aria-current={active === item.id ? 'location' : undefined}
          >
            {item.label}
          </a>
        ))}
        <a className="mobile-menu-download" href={links.releases} target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}>
          Download Glimp voor Android
          <M3eIcon name="arrow_outward" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
