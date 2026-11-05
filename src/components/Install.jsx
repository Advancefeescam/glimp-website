import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import { M3eAccordion, M3eExpansionPanel } from '@m3e/react/expansion-panel';
import { links } from '../links';
import { useReveal } from '../hooks/useReveal';

const steps = [
  { number: '01', title: 'Open GitHub Releases', text: 'Daar vind je de nieuwste versie die voor Android is gepubliceerd.' },
  { number: '02', title: 'Download de APK', text: 'Kies het juiste installatiebestand bij de release.' },
  { number: '03', title: 'Installeer Glimp', text: 'Open het bestand en geef Android zo nodig toestemming voor installatie.' },
];

const questions = [
  {
    question: 'Op welke apparaten werkt Glimp?',
    answer: 'Glimp is ontwikkeld voor Android. Er is geen ondersteunde iOS-release; een browserweergave is bedoeld voor ontwikkeling, niet als losse webapp.',
  },
  {
    question: 'Is alle informatie realtime?',
    answer: 'Nee. Niet alle bronnen bieden actuele informatie. Vertrektijden, routeopties en voertuigposities kunnen ontbreken of afwijken per vervoerder, locatie en moment.',
  },
  {
    question: 'Waarom vraagt Android om toestemming voor installatie?',
    answer: 'Een APK van GitHub komt niet uit een appwinkel. Android kan daarom vragen of je installatie via de gekozen browser of bestandsbeheerder wilt toestaan.',
  },
  {
    question: 'Waar kan ik een bug of een idee melden?',
    answer: 'Via GitHub Issues. Vermeld als het kan welke versie, welk toestel en welke Android-versie je gebruikt. Voeg stappen toe om een fout te herhalen, maar deel geen persoonlijke gegevens.',
  },
];

export default function Install() {
  const ref = useReveal();

  return (
    <section className="section install-section" id="installeren" ref={ref}>
      <div className="wrap">
        <div className="download-panel">
          <div className="download-decoration" aria-hidden="true">
            <span className="download-circle download-circle-a" />
            <span className="download-circle download-circle-b" />
            <span className="download-circle download-circle-c" />
          </div>
          <div className="download-content">
            <p className="eyebrow download-eyebrow"><span className="section-num">04</span> Tijd om te gaan</p>
            <h2>Klaar voor<br /><span>de volgende rit?</span></h2>
            <p>De kaart wacht op je. Download Glimp voor Android en ontdek het openbaar vervoer op jouw manier.</p>
            <div className="download-actions">
              <M3eButton variant="filled" size="large" href={links.releases} target="_blank" rel="noopener noreferrer">
                <M3eIcon name="download" slot="icon" />
                Download Glimp
              </M3eButton>
              <a className="download-secondary" href={links.repo} target="_blank" rel="noopener noreferrer">
                Bekijk de broncode <M3eIcon name="arrow_outward" aria-hidden="true" />
              </a>
            </div>
            <span className="download-note">Beschikbaar als Android-APK via GitHub · Actief in ontwikkeling</span>
          </div>
          <div className="download-illustration" aria-hidden="true">
            <span className="download-device">
              <img src={import.meta.env.BASE_URL + 'screenshots/route-options.webp'} alt="" width="640" height="1412" loading="lazy" />
            </span>
          </div>
        </div>

        <div className="install-how">
          <div className="install-how-title">
            <p className="eyebrow">Zo werkt het</p>
            <h3>Drie stappen.<br />Dan ben je onderweg.</h3>
          </div>
          <ol className="install-steps">
            {steps.map((step) => (
              <li key={step.number}>
                <span className="install-step-number">{step.number}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">Goed om te weten</p>
            <h3>Veelgestelde<br />vragen.</h3>
            <p>Staat je vraag er niet tussen? Je kunt feedback en problemen melden op <a href={links.issues} target="_blank" rel="noopener noreferrer">GitHub Issues</a>.</p>
          </div>
          <div className="faq-list">
            <M3eAccordion>
              {questions.map((item) => (
                <M3eExpansionPanel key={item.question}>
                  <span slot="header">{item.question}</span>
                  <p>{item.answer}</p>
                </M3eExpansionPanel>
              ))}
            </M3eAccordion>
          </div>
        </div>
      </div>
    </section>
  );
}
