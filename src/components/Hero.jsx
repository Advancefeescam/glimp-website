import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import { links } from '../links';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Phone from './Phone';

function HeroActions({ compact = false }) {
  return (
    <div className={'hero-actions' + (compact ? ' hero-actions-compact' : '')}>
      <M3eButton variant="filled" size="small" href={links.download}>
        <M3eIcon slot="icon" name="download" />
        Download Glimp
      </M3eButton>
      <M3eButton variant="text" size="small" href="#functies">
        Bekijk functies
      </M3eButton>
    </div>
  );
}

export default function Hero() {
  const mobile = useMediaQuery('(max-width: 767px)');

  return (
    <section className={'hero' + (mobile ? ' hero-is-mobile' : '')} id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-category">OPENBAAR VERVOER VOOR ANDROID</p>
          <h1 id="hero-title">Je volgende rit.<br /><span className="hero-emphasis">Al in beeld.</span></h1>
          <p className="hero-description">
            Glimp brengt haltes, vertrektijden en reisopties samen op één kaart.
            Minder zoeken, meer overzicht onderweg.
          </p>
          <HeroActions compact={mobile} />
          <p className="hero-platform-note">Je reis, in één oogopslag. <span aria-hidden="true">·</span> Android-app voor Nederland</p>
        </div>

        {mobile ? (
          <div className="hero-product-mobile">
            <div className="hero-product-surface" aria-hidden="true" />
            <Phone shot="stop-departures" alt="Glimp toont vertrektijden van een halte op de kaart" eager className="hero-product-primary" />
            <span className="hero-product-caption">ECHT SCHERM UIT GLIMP</span>
          </div>
        ) : (
          <div className="hero-product-desktop">
            <div className="hero-product-surface" aria-hidden="true" />
            <Phone shot="map" alt="Kaart met haltes in Glimp" eager className="hero-product-primary" />
            <Phone shot="stop-departures" alt="Vertrektijden op een halte in Glimp" eager className="hero-product-secondary" />
          </div>
        )}
      </div>
    </section>
  );
}
