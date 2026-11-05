import { useState } from 'react';
import { M3eSegmentedButton, M3eButtonSegment } from '@m3e/react/segmented-button';
import { M3eIcon } from '@m3e/react/icon';
import { useReveal } from '../hooks/useReveal';

const themes = [
  { id: 'light', label: 'Licht', icon: 'light_mode', note: 'Voor de lichte momenten.', description: 'Helder en open.' },
  { id: 'dark', label: 'Donker', icon: 'dark_mode', note: 'Rust voor je ogen.', description: 'Subtiel in het donker.' },
  { id: 'oled', label: 'OLED', icon: 'contrast', note: 'Zo donker als je wilt.', description: 'Bijna volledig zwart.' },
];

export default function Themes() {
  const [active, setActive] = useState('dark');
  const current = themes.find((theme) => theme.id === active);
  const ref = useReveal();

  return (
    <section className="section themes-section" id="weergave" ref={ref}>
      <div className="wrap themes-layout">
        <div className="themes-information">
          <p className="eyebrow"><span className="section-num">02</span> Jouw eigen sfeer</p>
          <h2>Een andere sfeer.<br /><span className="muted-heading">Dezelfde eenvoud.</span></h2>
          <p className="themes-lead">Licht overdag, donker onderweg of een diepzwarte OLED-weergave. Jij bepaalt hoe Glimp eruitziet.</p>

          <div className="theme-controls">
            <span className="control-label">Probeer de app-thema's</span>
            <M3eSegmentedButton
              className="theme-switch"
              aria-label="Kies een app-weergave voor het voorbeeld"
              onChange={(event) => {
                const value = event.target?.value;
                if (themes.some((theme) => theme.id === value)) setActive(value);
              }}
            >
              {themes.map((theme) => (
                <M3eButtonSegment key={theme.id} value={theme.id} checked={theme.id === active}>
                  <M3eIcon slot="icon" name={theme.icon} />
                  {theme.label}
                </M3eButtonSegment>
              ))}
            </M3eSegmentedButton>
            <p className="theme-description" aria-live="polite">
              <strong>{current.note}</strong> {current.description}
            </p>
          </div>
          <p className="theme-aside">Ook de kaart heeft eigen stijlen en lagen, los van het app-thema.</p>
        </div>
        <div className={'theme-showcase theme-showcase-' + active}>
          <div className="theme-showcase-shape" aria-hidden="true" />
          <div className="theme-preview">
            <div className="theme-preview-top">
              <span className="preview-dots" aria-hidden="true"><i /><i /><i /></span>
              <span>THEME / {active.toUpperCase()}</span>
            </div>
            <div className="theme-preview-image">
              {themes.map((theme) => (
                <img
                  key={theme.id}
                  src={import.meta.env.BASE_URL + 'screenshots/theme-' + theme.id + '.webp'}
                  alt={'Voorbeeld van het ' + theme.label.toLowerCase() + 'e thema in Glimp'}
                  width="720" height="718"
                  loading="lazy"
                  decoding="async"
                  className={theme.id === active ? 'is-active' : ''}
                  aria-hidden={theme.id === active ? undefined : 'true'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
