import { M3eButton } from '@m3e/react/button';
import { M3eIcon } from '@m3e/react/icon';
import { links } from '../links';
import Phone from './Phone';

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="label">
          <span className="dot" aria-hidden="true" /> Openbaar vervoer · Android · Nederland
        </p>
        <h1>
          Jouw reis, in één <em>oogopslag.</em>
        </h1>
        <p className="lead">
          Glimp begint bij de kaart. Zoek een halte, bekijk de vertrektijden, plan je reis en volg
          een lijn, zonder eerst door drie schermen te hoeven.
        </p>
        <div className="actions">
          <M3eButton variant="filled" size="medium" href={links.releases} target="_blank" rel="noreferrer">
            <M3eIcon slot="icon" name="download" />
            Download voor Android
          </M3eButton>
          <M3eButton variant="outlined" size="medium" href="#functies">
            Bekijk de app
          </M3eButton>
        </div>
        <p className="fine">
          Glimp is in actieve ontwikkeling. Beschikbare gegevens verschillen per vervoerder en
          databron.
        </p>
      </div>

      <div className="hero-art" aria-label="Schermafbeeldingen uit de app">
        <Phone shot="map" alt="De kaart van Glimp met haltes en een zoekbalk bovenin" eager className="hero-phone a" />
        <Phone
          shot="stop-departures"
          alt="Haltepaneel met vertrektijden per lijn"
          eager
          className="hero-phone b"
        />
      </div>
    </section>
  );
}
