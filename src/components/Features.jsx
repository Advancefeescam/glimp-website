import { useState } from 'react';
import { M3eTabs, M3eTab, M3eTabPanel } from '@m3e/react/tabs';
import { M3eIcon } from '@m3e/react/icon';
import Phone from './Phone';
import { useReveal } from '../hooks/useReveal';
import { useMediaQuery } from '../hooks/useMediaQuery';

const features = [
  {
    id: 'kaart',
    tab: 'De kaart',
    icon: 'map',
    number: '01',
    eyebrow: 'De kaart',
    title: 'Alles begint op de kaart.',
    text: 'Zie de haltes om je heen en ga direct verder naar de informatie die je zoekt. Geen onnodige tussenstappen.',
    points: ['Zoek haltes en lijnen', 'Kies de kaartweergave die bij je past', 'Open ritinformatie rechtstreeks op de kaart'],
    shots: [
      ['map', 'De Glimp-kaart met haltes en zoekbalk'],
      ['map-styles', 'Beschikbare kaartstijlen in Glimp'],
    ],
  },
  {
    id: 'haltes',
    tab: 'Vertrektijden',
    icon: 'schedule',
    number: '02',
    eyebrow: 'Vertrektijden',
    title: 'Je volgende vertrek, meteen zichtbaar.',
    text: 'Kies een halte en bekijk de eerstvolgende ritten per lijn. Duidelijk en zonder een overvol overzicht.',
    points: ['Vertrekken overzichtelijk bij elkaar', 'Filter op de lijn die je nodig hebt', 'Meer ritinformatie indien beschikbaar'],
    shots: [
      ['stop-departures', 'Haltepaneel met vertrektijden in Glimp'],
      ['stop-details', 'De uitgebreide vertrekgegevens van een halte'],
    ],
  },
  {
    id: 'plannen',
    tab: 'Reizen',
    icon: 'alt_route',
    number: '03',
    eyebrow: 'Reisplanner',
    title: 'De route die bij je past.',
    text: 'Van vertrekpunt naar bestemming: vergelijk beschikbare verbindingen, reistijden en overstappen.',
    points: ['Kies je vertrekpunt en bestemming', 'Vergelijk verschillende reisopties', 'Bekijk de stappen van je reis'],
    shots: [
      ['trip-planner', 'De reisplanner van Glimp met vertrek en bestemming'],
      ['route-options', 'Verschillende reisopties op de Glimp-kaart'],
    ],
  },
  {
    id: 'volgen',
    tab: 'Onderweg',
    icon: 'directions_bus',
    number: '04',
    eyebrow: 'Onderweg',
    title: 'Volg de lijn, niet het giswerk.',
    text: 'Bekijk het verloop van je lijn en, als de databron het ondersteunt, de locatie van voertuigen.',
    points: ['Bekijk het verloop van een lijn', 'Zie beschikbare voertuiglocaties', 'Informatie kan per vervoerder verschillen'],
    shots: [
      ['line-viewer', 'De route van een lijn op de kaart'],
      ['bus-tracking', 'Een voertuig wordt weergegeven op de kaart'],
    ],
    mobileShot: ['bus-tracking', 'Een voertuig wordt weergegeven op de kaart'],
  },
];

function DesktopFeatures() {
  const [active, setActive] = useState(0);

  return (
    <div className="feature-shell" data-motion>
      <M3eTabs
        className="feature-tabs"
        variant="secondary"
        stretch
        disablePagination
        disableSwipe
        onChange={(event) => {
          const index = event.target?.selectedIndex;
          if (Number.isInteger(index) && index >= 0 && index < features.length) setActive(index);
        }}
      >
        {features.map((feature, index) => (
          <M3eTab key={feature.id} htmlFor={'feature-' + feature.id} selected={index === active}>
            <M3eIcon slot="icon" name={feature.icon} />
            {feature.tab}
          </M3eTab>
        ))}
        {features.map((feature, index) => (
          <M3eTabPanel key={feature.id} id={'feature-' + feature.id}>
            <div className="feature-layout" key={active === index ? feature.id + '-shown' : feature.id + '-idle'} data-feature-active={active === index}>
              <div className="feature-story">
                <span className="feature-overline">{feature.number} / {feature.eyebrow}</span>
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.text}</p>
                <ul className="feature-points">
                  {feature.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
              <div className="feature-gallery">
                {feature.shots.map(([shot, alt], index) => (
                  <Phone key={shot} shot={shot} alt={alt} className={index === 0 ? 'gallery-main' : 'gallery-secondary'} />
                ))}
              </div>
            </div>
          </M3eTabPanel>
        ))}
      </M3eTabs>
    </div>
  );
}

function MobileFeatures() {
  return (
    <div className="mobile-features">
      {features.map((feature) => {
        const [shot, alt] = feature.mobileShot ?? feature.shots[0];
        return (
          <article className="mobile-feature-card" key={feature.id} data-motion>
            <div className="mobile-feature-copy">
              <p className="mobile-feature-eyebrow">{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <p className="mobile-feature-detail">{feature.points[0]}</p>
            </div>
            <div className="mobile-feature-visual">
              <Phone shot={shot} alt={alt} className="mobile-feature-phone" />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function Features() {
  const mobile = useMediaQuery('(max-width: 767px)');
  const ref = useReveal();

  return (
    <section className="section features-section" id="functies" ref={ref}>
      <div className="wrap">
        <div className="section-heading-row" data-motion>
          <header className="section-head">
            <p className="eyebrow">Ontdek Glimp</p>
            <h2>Alles op z'n plek.<br /><span className="muted-heading">Ook onderweg.</span></h2>
          </header>
          <p className="section-intro">Vier onderdelen, één overzichtelijke ervaring. Kies zelf hoe je je reis bekijkt.</p>
        </div>
        {mobile ? <MobileFeatures /> : <DesktopFeatures />}
      </div>
    </section>
  );
}
