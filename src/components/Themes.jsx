import { useState } from 'react';
import { M3eSegmentedButton, M3eButtonSegment } from '@m3e/react/segmented-button';
import { M3eIcon } from '@m3e/react/icon';
import { useReveal } from '../hooks/useReveal';

const themes = [
  { id: 'light', label: 'Licht', icon: 'light_mode', note: 'Helder en rustig, ook in daglicht.' },
  { id: 'dark', label: 'Donker', icon: 'dark_mode', note: 'Aangenaam op een donkere reis.' },
  { id: 'oled', label: 'OLED', icon: 'contrast', note: 'Diepzwarte vlakken op een OLED-scherm.' },
];

// Dit is een live kleurvoorbeeld, geen screenshot van de Android-app.
// Echte onboarding-screenshots blijven als losse bestanden beschikbaar.
function ThemePreview({ active }) {
  const label = themes.find((theme) => theme.id === active)?.label ?? 'Donker';

  return (
    <div className="theme-device-frame" role="img" aria-label={'Illustratief ' + label + '-thema met drie voorbeeldkeuzes op een telefoonscherm'}>
      <div className={'theme-device-screen theme-device-screen-' + active} aria-hidden="true">
        <div className="theme-device-brand">
          <img src={import.meta.env.BASE_URL + 'assets/glimp-icon.webp'} alt="" width="32" height="32" />
          <span>glimp<span className="theme-brand-dot">.</span></span>
        </div>
        <div className="theme-device-content">
          <h3>Weergave</h3>
          <p>Kies een thema dat bij je past.</p>
          <div className="theme-demo-panel">
            {themes.map((theme) => (
              <div key={theme.id} className={'theme-demo-choice' + (theme.id === active ? ' selected' : '')}>
                <M3eIcon name={theme.icon} />
                <span>{theme.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="theme-device-gesture" />
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
        <div className="themes-information" data-motion>
          <p className="eyebrow">Weergave</p>
          <h2>Jouw Glimp.<br /><span className="muted-heading">Jouw kleuren.</span></h2>
          <p className="themes-lead">Licht, donker of OLED: kies wat prettig kijkt. De rest van de app past zich eraan aan.</p>
          <div className="theme-controls">
            <span className="control-label">Bekijk de drie thema's</span>
            <M3eSegmentedButton
              className="theme-switch"
              aria-label="Kies een app-thema om te bekijken"
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
            <p className="theme-description" aria-live="polite">{current.note}</p>
          </div>
          <p className="theme-aside">Illustratieve themaweergave. De app heeft daarnaast meerdere kaartstijlen.</p>
        </div>
        <div className={'theme-showcase theme-showcase-' + active} data-motion>
          <ThemePreview active={active} />
        </div>
      </div>
    </section>
  );
}
