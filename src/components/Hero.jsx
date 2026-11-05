import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import { links } from '../links';
import Phone from './Phone';

export default function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="kicker-mark" aria-hidden="true" />
            GEMAAKT VOOR ONDERWEG
            <span className="kicker-divider" aria-hidden="true" />
            ANDROID
          </p>
          <h1 id="hero-title">
            Je reis.<br />In één <span>oogopslag.</span>
          </h1>
          <p className="lead">
            Niet zoeken tussen schermen, maar meteen zien wat belangrijk is.
            Haltes, vertrektijden, routes en lijnen — vanaf één kaart.
          </p>
          <div className="actions">
            <M3eButton className="hero-primary" variant="tonal" size="large" href={links.releases} target="_blank" rel="noopener noreferrer">
              <M3eIcon slot="icon" name="download" />
              Download voor Android
            </M3eButton>
            <a className="hero-secondary" href="#functies">
              Ontdek Glimp <M3eIcon name="arrow_outward" aria-hidden="true" />
            </a>
          </div>
          <p className="hero-fine">Gratis te downloaden via GitHub Releases · Actief in ontwikkeling</p>
        </div>
        <div className="hero-art">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <span className="hero-art-label" aria-hidden="true">GLIMP / IN BEELD</span>
          <Phone shot="map" alt="Kaartweergave van Glimp met haltes en een zoekbalk" eager className="hero-phone a" />
          <Phone shot="stop-departures" alt="Vertrektijden bij een geselecteerde halte in Glimp" eager className="hero-phone b" />
          <div className="hero-art-tag" aria-hidden="true">
            <span className="tag-symbol">↗</span>
            <span>Één kaart.<br /><strong>Meer overzicht.</strong></span>
          </div>
        </div>
      </div>
      <div className="hero-tail">
        <span>OPENBAAR VERVOER, ZONDER OMRIT.</span>
        <a href="#ervaring">Zo werkt Glimp <M3eIcon name="arrow_outward" aria-hidden="true" /></a>
      </div>
    </section>
  );
}
