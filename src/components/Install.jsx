import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import { M3eAccordion, M3eExpansionPanel } from '@m3e/react/expansion-panel';
import { links } from '../links';
import { useReveal } from '../hooks/useReveal';

const steps = [
  { n: '01', title: 'Open de release', text: 'Ga naar de nieuwste release op GitHub.' },
  { n: '02', title: 'Download de APK', text: 'Kies het Android-bestand bij de release.' },
  {
    n: '03',
    title: 'Sta de installatie toe',
    text: 'Android vraagt om toestemming als je een APK buiten een appwinkel om installeert.',
  },
];

const status = [
  { platform: 'Android', state: 'APK via GitHub', tone: 'ok' },
  { platform: 'iOS', state: 'Geen ondersteunde release', tone: 'no' },
  { platform: 'Web', state: 'Niet afzonderlijk ondersteund', tone: 'no' },
];

const faq = [
  {
    q: 'Op welke apparaten werkt Glimp?',
    a: 'Op Android. Er is op dit moment geen ondersteunde release voor iOS, en de webversie is alleen bedoeld als ontwikkelomgeving.',
  },
  {
    q: 'Zijn de vertrektijden altijd actueel?',
    a: 'Niet altijd. Welke informatie beschikbaar is hangt af van de appversie, de vervoerder en de externe databronnen. Vertrektijden en voertuiggegevens kunnen daardoor ontbreken of afwijken.',
  },
  {
    q: 'Waarom vraagt Android om toestemming bij het installeren?',
    a: 'Omdat je een APK installeert die niet uit een appwinkel komt. Android vraagt dan bij de eerste keer toestemming voor de app waarmee je het bestand opent.',
  },
  {
    q: 'Ik heb een bug gevonden of een idee. Waar meld ik dat?',
    a: 'Open een issue op GitHub. Vermeld welke versie je gebruikt, je Android-versie en toesteltype, welke stappen het probleem veroorzaken en wat je verwachtte. Deel geen wachtwoorden, tokens of andere privégegevens.',
  },
];

export default function Install() {
  const ref = useReveal();
  return (
    <section className="section wrap install" id="installeren" ref={ref}>
      <header className="section-head">
        <p className="label">05 — Begin je reis</p>
        <h2>Klaar voor je volgende halte?</h2>
      </header>

      <div className="install-grid">
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="step-n">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="status" aria-label="Beschikbaarheid per platform">
          <p className="label">Beschikbaarheid</p>
          <ul>
            {status.map((s) => (
              <li key={s.platform} data-tone={s.tone}>
                <span>{s.platform}</span>
                <span>{s.state}</span>
              </li>
            ))}
          </ul>
          <M3eButton variant="filled" size="medium" href={links.releases} target="_blank" rel="noreferrer">
            <M3eIcon slot="icon" name="android" />
            Download de Android-app
          </M3eButton>
        </aside>
      </div>

      <div className="faq">
        <h3 className="faq-title">Veelgestelde vragen</h3>
        <M3eAccordion>
          {faq.map((f) => (
            <M3eExpansionPanel key={f.q}>
              <span slot="header">{f.q}</span>
              <p>{f.a}</p>
            </M3eExpansionPanel>
          ))}
        </M3eAccordion>
      </div>
    </section>
  );
}
