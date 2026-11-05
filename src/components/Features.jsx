import { useState } from 'react';
import { M3eTabs, M3eTab, M3eTabPanel } from '@m3e/react/tabs';
import { M3eIcon } from '@m3e/react/icon';
import Phone from './Phone';
import { useReveal } from '../hooks/useReveal';
import { useMediaQuery } from '../hooks/useMediaQuery';

const features = [
  {
    id: 'kaart',
    tab: 'Kaart',
    icon: 'map',
    title: 'Begin bij de kaart',
    text: 'De kaart is het startscherm. Zoek op bus of halte, zie het weer op je locatie en pas de kaart aan met lagen en kaartstijlen.',
    points: ['Zoeken op bus of halte', '3D-gebouwen en dag/nacht-sfeer', 'Online kaartstijlen, ook satelliet'],
    shots: [
      ['map', 'De kaart met haltes, zoekbalk, weer en navigatie onderin'],
      ['map-styles', 'Het scherm Kaart en sfeer met kaartlagen en kaartstijlen'],
    ],
  },
  {
    id: 'haltes',
    tab: 'Haltes',
    icon: 'schedule',
    title: 'Vertrektijden per halte',
    text: 'Tik op een halte en zie per lijn wanneer de volgende ritten vertrekken, met de status erbij. Filter op lijn of kies een ander vertrekmoment dan nu.',
    points: ['Filteren per lijn', 'Vertrekmoment kiezen', 'Melding instellen per rit'],
    shots: [
      ['stop-departures', 'Haltepaneel met lijnfilter en vertrektijden op de kaart'],
      ['stop-details', 'Detailscherm van een halte met alle komende ritten'],
    ],
  },
  {
    id: 'plannen',
    tab: 'Plannen',
    icon: 'alt_route',
    title: 'Van A naar B',
    text: 'Vul vertrek en bestemming in, kies je vervoerswijze en vergelijk wat er gevonden wordt. Per optie zie je de reisduur, overstappen en eventuele prijsinformatie.',
    points: ['OV, bus, trein of lopen', 'Duur, overstappen en prijs per optie', 'Beste optie gemarkeerd'],
    shots: [
      ['trip-planner', 'De reisplanner met vertrek, bestemming en vervoerswijzen'],
      ['route-options', 'Een lijst met gevonden routes en hun reisduur'],
    ],
  },
  {
    id: 'volgen',
    tab: 'Lijnen',
    icon: 'directions_bus',
    title: 'Een lijn en voertuig volgen',
    text: 'Bekijk het verloop van een lijn op de kaart en, waar de gegevens het toelaten, waar voertuigen zich op dat moment bevinden.',
    points: ['Het volledige verloop van de lijn', 'Voertuigen volgen op de kaart', 'Hangt af van de databron'],
    shots: [
      ['line-viewer', 'De lijnweergave met het verloop van een lijn op de kaart'],
      ['bus-tracking', 'Kaart met een bus die gevolgd wordt'],
    ],
  },
];

export default function Features() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  // Op smalle schermen passen vier tabs alleen als ze de breedte verdelen (icoon boven label).
  const narrow = useMediaQuery('(max-width: 640px)');

  return (
    <section className="section wrap" id="functies" ref={ref}>
      <header className="section-head">
        <p className="label">01 — Ontdek de app</p>
        <h2>De app die met je meereist.</h2>
        <p className="section-sub">
          Van haltes tot reisopties en voertuiggegevens: alles begint bij het overzicht.
        </p>
      </header>

      <div className="feature-card">
        <M3eTabs
          className="tabs"
          variant={narrow ? 'primary' : 'secondary'}
          stretch={narrow}
          disablePagination={narrow}
          disableSwipe
          onChange={(e) => {
            const i = e.target?.selectedIndex;
            if (typeof i === 'number' && i >= 0) setActive(i);
          }}
        >
          {features.map((f, i) => (
            <M3eTab key={`t-${f.id}`} htmlFor={`paneel-${f.id}`} selected={i === active}>
              <M3eIcon slot="icon" name={f.icon} />
              {f.tab}
            </M3eTab>
          ))}
          {features.map((f) => (
            <M3eTabPanel key={`p-${f.id}`} id={`paneel-${f.id}`}>
              <div className="feature">
                <div className="feature-copy">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <ul className="points">
                    {f.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="feature-stage">
                  {f.shots.map(([shot, alt]) => (
                    <Phone key={shot} shot={shot} alt={alt} />
                  ))}
                </div>
              </div>
            </M3eTabPanel>
          ))}
        </M3eTabs>
      </div>
    </section>
  );
}
