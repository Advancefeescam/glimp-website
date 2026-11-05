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
    eyebrow: 'Jouw startpunt',
    title: 'De omgeving, helemaal in beeld.',
    text: 'Geen lijst waar je eerst doorheen moet. Open de kaart, ontdek de haltes om je heen en ga direct verder naar wat er rijdt.',
    points: ['Zoek haltes en lijnen op één plek', 'Wissel tussen kaartlagen en kaartstijlen', 'Bekijk meer informatie vanuit de kaart'],
    shots: [
      ['map', 'Kaartweergave van Glimp met haltes en zoekbalk'],
      ['map-styles', 'Kaartstijlen en lagen in Glimp'],
    ],
  },
  {
    id: 'haltes',
    tab: 'Vertrektijden',
    icon: 'schedule',
    number: '02',
    eyebrow: 'Precies op tijd',
    title: 'De volgende vertrektijden, zonder zoekwerk.',
    text: 'Selecteer een halte en zie welke ritten er aankomen. Bekijk de lijnen, kies waar je naar wilt kijken en ontdek meer details per vertrek.',
    points: ['Vertrekken overzichtelijk bij elkaar', 'Filter op de gewenste lijn', 'Meer ritinformatie waar beschikbaar'],
    shots: [
      ['stop-departures', 'Haltescherm met vertrektijden bij de kaart'],
      ['stop-details', 'Gedetailleerde vertrektijden bij een halte'],
    ],
  },
  {
    id: 'plannen',
    tab: 'Reizen',
    icon: 'alt_route',
    number: '03',
    eyebrow: 'Van A naar B',
    title: 'Niet één route. Jouw beste optie.',
    text: 'Vul je bestemming in en vergelijk de beschikbare reizen. Met een overzicht van de reisduur, overstappen en verschillende mogelijkheden.',
    points: ['Vertrek en bestemming invoeren', 'Vergelijk gevonden reisopties', 'Bekijk de stappen van je reis'],
    shots: [
      ['trip-planner', 'De Glimp-reisplanner met vertrek en bestemming'],
      ['route-options', 'Glimp toont verschillende reisopties'],
    ],
  },
  {
    id: 'volgen',
    tab: 'Onderweg',
    icon: 'directions_bus',
    number: '04',
    eyebrow: 'Blijf kijken',
    title: 'Je lijn. Je rit. Meer overzicht.',
    text: 'Bekijk de loop van een lijn op de kaart en ontdek waar voertuigen zijn als hun locatiegegevens beschikbaar zijn.',
    points: ['Een lijn en het verloop ervan bekijken', 'Beschikbare voertuigposities tonen', 'Extra ritgegevens waar ondersteund'],
    shots: [
      ['line-viewer', 'Lijnverloop in de Glimp-kaart'],
      ['bus-tracking', 'Voertuig volgen in Glimp'],
    ],
  },
];

export default function Features() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const narrow = useMediaQuery('(max-width: 640px)');

  return (
    <section className="section features-section" id="functies" ref={ref}>
      <div className="wrap">
        <div className="section-heading-row">
          <header className="section-head">
            <p className="eyebrow"><span className="section-num">01</span> Ontdek Glimp</p>
            <h2>Alles op z'n plek.<br /><span className="muted-heading">Ook onderweg.</span></h2>
          </header>
          <p className="section-intro">Wat je onderweg zoekt, moet je meteen kunnen vinden. Glimp maakt de kaart het vertrekpunt voor alles wat daarna komt.</p>
        </div>

        <div className="feature-shell">
          <M3eTabs
            className="feature-tabs"
            variant={narrow ? 'primary' : 'secondary'}
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
            {features.map((feature) => (
              <M3eTabPanel key={feature.id} id={'feature-' + feature.id}>
                <div className="feature-layout">
                  <div className="feature-story">
                    <span className="feature-overline">{feature.number} / {feature.eyebrow}</span>
                    <h3>{feature.title}</h3>
                    <p className="feature-description">{feature.text}</p>
                    <ul className="feature-points">
                      {feature.points.map((point) => (
                        <li key={point}>
                          <span className="point-check"><M3eIcon name="check" aria-hidden="true" /></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <span className="feature-count">{feature.number} <span>/ 04</span></span>
                  </div>
                  <div className="feature-gallery">
                    <div className="gallery-track" aria-hidden="true" />
                    {feature.shots.map(([shot, alt], index) => (
                      <Phone key={shot} shot={shot} alt={alt} className={index === 0 ? 'gallery-main' : 'gallery-secondary'} />
                    ))}
                    <span className="gallery-caption">ECHTE APP-SCHERMEN / GLIMP</span>
                  </div>
                </div>
              </M3eTabPanel>
            ))}
          </M3eTabs>
        </div>
      </div>
    </section>
  );
}
