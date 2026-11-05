import { useState } from 'react';
import { M3eSegmentedButton, M3eButtonSegment } from '@m3e/react/segmented-button';
import { M3eIcon } from '@m3e/react/icon';
import { useReveal } from '../hooks/useReveal';

const themes = [
  { id: 'light', label: 'Licht', icon: 'light_mode', note: 'Voor de lichte momenten.', description: 'Helder en open.' },
  { id: 'dark', label: 'Donker', icon: 'dark_mode', note: 'Rust voor je ogen.', description: 'Subtiel in het donker.' },
  { id: 'oled', label: 'OLED', icon: 'contrast', note: 'Zo donker als je wilt.', description: 'Bijna volledig zwart.' },
];

// Een live kleurdemonstratie, geen uitgerekt screenshot. De oorspronkelijke
// vierkante onboarding-screenshots blijven beschikbaar in public/screenshots/.
function ThemePhone({ active }) {
  const themeName = active === 'oled' ? 'OLED' : active === 'light' ? 'lichte' : 'donkere';
  return (
    <div className="theme-device-frame" role="img" aria-label={'Illustratieve, volledige telefoonvoorvertoning van de ' + themeName + ' weergave van Glimp'}>
      <div className={'theme-device-screen theme-device-screen-' + active} aria-hidden="true">
        <div className="theme-device-status">
          <span>GLIMP / THEMA</span>
          <span className="theme-status-dots"><i /><i /><i /></span>
        </div>
        <div className="theme-device-brand">
          <span className="theme-app-icon">
            <img src={import.meta.env.BASE_URL + 'assets/glimp-icon.webp'} alt="" width="27" height="27" />
          </span>
          <span>glimp<span className="theme-brand-dot">.</span></span>
        </div>
        <div className="theme-device-content">
          <span className="theme-device-step">WEERGAVE / 02</span>
          <span className="theme-device-illustration"><M3eIcon name="palette" /></span>
          <h3>Jouw Glimp.<br />Jouw stijl.</h3>
          <p>Een weergave die bij jou past, waar je ook bent.</p>
          <div className="theme-demo-panel">
            <span className="theme-demo-label">Kies je weergave</span>
            <div className="theme-demo-choices">
              {themes.map((theme) => (
                <div key={theme.id} className={'theme-demo-choice' + (theme.id === active ? ' selected' : '')}>
                  <M3eIcon name={theme.icon} />
                  <span>{theme.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="theme-demo-palette">
            <span className="theme-demo-palette-label">Kleuren uit jouw thema</span>
            <span className="theme-demo-swatches"><i /><i /><i /><i /></span>
          </div>
        </div>
        <div className="theme-device-gesture"><span /></div>
      </div>
    </div>
  );
}

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
          <ThemePhone active={active} />
          <p className="theme-visual-caption">INTERACTIEF KLEURENVOORBEELD <span>—</span> {current.label.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
}
