import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import { links } from '../links';
import Phone from './Phone';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-spark" aria-hidden="true" />
            Jouw OV, opnieuw bekeken
          </p>
          <h1 id="hero-title">
            Je volgende rit.<br />
            <span className="hero-emphasis">Al in beeld.</span>
          </h1>
          <p className="hero-description">
            Van die ene halte om de hoek tot je hele reis. Glimp brengt de kaart,
            vertrektijden en routeopties samen — precies wanneer je ze nodig hebt.
          </p>
          <div className="hero-actions">
            <M3eButton variant="filled" size="large" href={links.releases}
              target="_blank" rel="noopener noreferrer">
              <M3eIcon slot="icon" name="download" />
              Download voor Android
            </M3eButton>
            <M3eButton variant="outlined" size="large" href="#functies">
              Ontdek Glimp
              <M3eIcon slot="icon" name="arrow_forward" />
            </M3eButton>
          </div>
          <div className="hero-footnote">
            <span className="availability-mark" aria-hidden="true" />
            <span>Ontwikkeld voor Android</span>
            <span className="footnote-separator" aria-hidden="true">/</span>
            <span>Gebouwd voor het Nederlandse OV</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-blob" aria-hidden="true" />
          <svg className="hero-route" viewBox="0 0 560 560" fill="none" aria-hidden="true">
            <path d="M-35 460C104 475 86 295 215 292C322 290 326 441 466 420C538 409 525 290 602 255" stroke="currentColor" strokeWidth="3" strokeDasharray="10 13" strokeLinecap="round" />
            <circle cx="214" cy="292" r="10" fill="#C0FF9A" stroke="#18262B" strokeWidth="3" />
            <circle cx="467" cy="420" r="10" fill="#C0FF9A" stroke="#18262B" strokeWidth="3" />
          </svg>
          <div className="visual-orbit orbit-a" aria-hidden="true" />
          <div className="visual-orbit orbit-b" aria-hidden="true" />
          <Phone shot="map" alt="De Glimp-kaart met haltes en locaties" eager className="hero-phone hero-phone-main" />
          <Phone shot="stop-departures" alt="Glimp toont de volgende vertrekken bij een halte" eager className="hero-phone hero-phone-side" />
          <div className="hero-floating floating-top" aria-hidden="true">
            <span className="floating-icon"><M3eIcon name="near_me" /></span>
            <span><strong>De kaart eerst</strong><small>Alles binnen handbereik</small></span>
          </div>
          <div className="hero-floating floating-bottom" aria-hidden="true">
            <span className="mini-route-line"><i /><i /><i /></span>
            <span><strong>En je reis volgt.</strong><small>Halte · route · bestemming</small></span>
          </div>
        </div>
      </div>
      <div className="wrap hero-bottom">
        <span>SCROLL OM TE ONTDEKKEN</span>
        <span className="hero-scroll-line" aria-hidden="true" />
        <span>01 / 05</span>
      </div>
    </section>
  );
}
