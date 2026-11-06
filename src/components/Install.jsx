import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import { M3eAccordion, M3eExpansionPanel } from '@m3e/react/expansion-panel';
import { links } from '../links';
import { useReveal } from '../hooks/useReveal';
import Phone from './Phone';

const steps = [
  { number: '01', title: 'Kies je architectuur', text: 'Open onze downloadpagina en kies Universal of de versie die bij je toestel past.' },
  { number: '02', title: 'Download de APK', text: 'De knop opent het beschikbare bestand van de officiële GitHub-release.' },
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
        <div className="download-panel" data-motion="">
          <div className="download-content">
            <p className="eyebrow download-eyebrow">Voor Android</p>
            <h2>Klaar voor<br /><span>de volgende rit?</span></h2>
            <p>Kies eenvoudig het juiste APK-bestand voor jouw Android-apparaat.</p>
            <div className="download-actions">
              <M3eButton variant="filled" size="medium" href={links.download}>
                <M3eIcon name="download" slot="icon" />
                Kies je APK
              </M3eButton>
              <a className="download-secondary" href={links.repo} target="_blank" rel="noopener noreferrer">
                Bekijk de broncode <M3eIcon name="arrow_outward" aria-hidden="true" />
              </a>
            </div>
            <span className="download-note">Vier architecturen · Android APK via GitHub</span>
          </div>
          <div className="download-illustration" aria-hidden="true">
            <Phone shot="route-options" alt="" className="download-phone" />
          </div>
        </div>

        <div className="install-how">
          <div className="install-how-title" data-motion="">
            <p className="eyebrow">Zo werkt het</p>
            <h3>Drie stappen.<br />Dan ben je onderweg.</h3>
          </div>
          <ol className="install-steps">
            {steps.map((step) => (
              <li key={step.number} data-motion="">
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
          <div className="faq-intro" data-motion="">
            <p className="eyebrow">Goed om te weten</p>
            <h3>Veelgestelde<br />vragen.</h3>
            <p>Staat je vraag er niet tussen? Je kunt feedback en problemen melden op <a href={links.issues} target="_blank" rel="noopener noreferrer">GitHub Issues</a>.</p>
          </div>
          <div className="faq-list" data-motion="">
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
