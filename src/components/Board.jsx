import { M3eCard } from '@m3e/react/card';
import { M3eIcon } from '@m3e/react/icon';

const steps = [
  {
    n: '01',
    icon: 'map',
    title: 'Kijk om je heen.',
    body: 'Open de kaart en ontdek haltes en lijnen in jouw omgeving.',
    tone: 'lilac',
  },
  {
    n: '02',
    icon: 'schedule',
    title: 'Weet wat vertrekt.',
    body: 'Bekijk beschikbare vertrektijden en kies het moment dat past.',
    tone: 'mint',
  },
  {
    n: '03',
    icon: 'alt_route',
    title: 'Ga verder.',
    body: 'Vergelijk reisopties en houd de route onderweg in beeld.',
    tone: 'peach',
  },
];

export default function Board() {
  return (
    <section className="journey wrap" aria-label="Glimp in drie stappen">
      <div className="journey-heading">
        <p className="label">Gemaakt voor echte reizen</p>
        <p>Alles wat je nodig hebt, <strong>zonder de omwegen.</strong></p>
      </div>
      <div className="journey-grid">
        {steps.map((step) => (
          <M3eCard key={step.n} className={'journey-card ' + step.tone} variant="filled">
            <div className="journey-card-inner">
              <div className="journey-card-top">
                <span className="step-number">{step.n}</span>
                <span className="journey-icon"><M3eIcon name={step.icon} aria-hidden="true" /></span>
              </div>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </div>
          </M3eCard>
        ))}
      </div>
    </section>
  );
}
