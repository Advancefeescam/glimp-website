import { useState } from 'react';
import { M3eSegmentedButton, M3eButtonSegment } from '@m3e/react/segmented-button';
import { M3eIcon } from '@m3e/react/icon';
import { useReveal } from '../hooks/useReveal';

const base = import.meta.env.BASE_URL;

const themes = [
  { id: 'light', label: 'Licht', icon: 'light_mode', note: 'Helder en contrastrijk.', alt: 'Het weergavescherm van Glimp in het lichte thema' },
  { id: 'dark', label: 'Donker', icon: 'dark_mode', note: 'Rustiger bij weinig licht.', alt: 'Het weergavescherm van Glimp in het donkere thema' },
  { id: 'oled', label: 'OLED', icon: 'contrast', note: 'Een vrijwel zwarte achtergrond, bedoeld voor OLED-schermen.', alt: 'Het weergavescherm van Glimp in het OLED-thema' },
];

export default function Themes() {
  const [active, setActive] = useState('dark');
  const current = themes.find((t) => t.id === active);
  const ref = useReveal();

  return (
    <section className="section wrap themes" id="weergave" ref={ref}>
      <div className="themes-copy">
        <header className="section-head">
          <p className="label">02 — Weergave</p>
          <h2>Licht, donker of OLED.</h2>
          <p className="section-sub">Kies de weergave die bij je past. Je instelling geldt voor de hele app.</p>
        </header>

        <M3eSegmentedButton
          className="theme-switch"
          aria-label="Kies een weergave"
          onChange={(e) => {
            const value = e.target?.value;
            if (typeof value === 'string' && themes.some((t) => t.id === value)) setActive(value);
          }}
        >
          {themes.map((t) => (
            <M3eButtonSegment key={t.id} value={t.id} checked={t.id === active}>
              <M3eIcon slot="icon" name={t.icon} />
              {t.label}
            </M3eButtonSegment>
          ))}
        </M3eSegmentedButton>

        <p className="theme-note" aria-live="polite">
          <strong>{current.label}.</strong> {current.note}
        </p>
      </div>

      <div className="theme-stage">
        <div className="theme-card" data-theme={active}>
          {themes.map((t) => (
            <img
              key={t.id}
              className={t.id === active ? 'on' : ''}
              src={`${base}screenshots/theme-${t.id}.webp`}
              alt={t.alt}
              width="720"
              height="718"
              loading="lazy"
              decoding="async"
              aria-hidden={t.id === active ? undefined : 'true'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
