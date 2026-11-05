import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import Phone from './Phone';

export default function Spotlight() {
  return (
    <section className="spotlight wrap" id="ervaring" aria-labelledby="spotlight-title">
      <div className="spotlight-shell">
        <div className="spotlight-copy">
          <p className="label">02 — Van plan naar vertrek</p>
          <h2 id="spotlight-title">Van waar je bent, <em>naar waar je wilt zijn.</em></h2>
          <p>
            Kies je vertrek en bestemming. Vergelijk wat er gevonden wordt.
            Bekijk overstappen en reisduur — en houd daarna het overzicht.
          </p>
          <ul className="spotlight-points">
            <li><span>01</span> Vertrekpunt en bestemming</li>
            <li><span>02</span> Beschikbare routes vergelijken</li>
            <li><span>03</span> Details per reisoptie</li>
          </ul>
          <M3eButton variant="outlined" size="medium" href="#installeren">
            <M3eIcon slot="icon" name="android" />
            Probeer het op Android
          </M3eButton>
        </div>
        <div className="spotlight-visual">
          <span className="spotlight-caption">REISPLANNING / GLIMP</span>
          <Phone shot="trip-planner" alt="Vertrek- en bestemmingsvelden in de Glimp-reisplanner" className="spotlight-phone first" />
          <Phone shot="route-options" alt="Routeopties in Glimp, waaronder duur en overstappen" className="spotlight-phone second" />
        </div>
      </div>
    </section>
  );
}
