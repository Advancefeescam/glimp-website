import { M3eIcon } from '@m3e/react/icon';
import { sources } from '../links';
import { useReveal } from '../hooks/useReveal';

export default function Sources() {
  const ref = useReveal();
  return (
    <section className="section sources-section" id="gegevens" ref={ref}>
      <div className="wrap sources-layout">
        <div className="sources-copy">
          <p className="eyebrow"><span className="section-num">03</span> De informatie erachter</p>
          <h2>Verschillende bronnen.<br /><span className="muted-heading">Eén overzicht.</span></h2>
          <p>Glimp brengt gegevens uit verschillende diensten samen. De beschikbaarheid verschilt per regio, vervoerder en moment — daarom laten we je geen garanties zien die we niet kunnen waarmaken.</p>
          <div className="sources-note">
            <M3eIcon name="info" aria-hidden="true" />
            <span>Een voorspelde vertrektijd of voertuiglocatie kan ontbreken, vertragen of afwijken.</span>
          </div>
        </div>

        <ul className="source-links">
          {sources.map((source, index) => (
            <li key={source.name}>
              <a href={source.href} target="_blank" rel="noopener noreferrer">
                <span className="source-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="source-main">
                  <strong>{source.name}</strong>
                  <small>{source.role}</small>
                </span>
                <span className="source-arrow"><M3eIcon name="arrow_outward" aria-hidden="true" /></span>
                <span className="sr-only">(opent in een nieuw tabblad)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
