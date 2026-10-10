import { M3eIcon } from '@m3e/react/icon';
import { sources } from '../links';
import { useReveal } from '../hooks/useReveal';

export default function Sources() {
  const ref = useReveal();
  return (
    <section className="section wrap data" id="gegevens" ref={ref}>
      <header className="section-head">
        <p className="label">03 — Gegevens</p>
        <h2>Waar de informatie vandaan komt.</h2>
        <p className="section-sub">
          Glimp combineert gegevens van verschillende diensten. Elke dienst heeft eigen voorwaarden,
          dekking en beschikbaarheid, dus vertrektijden of voertuiggegevens zijn niet altijd volledig
          of actueel.
        </p>
      </header>

      <ul className="source-list">
        {sources.map((s) => (
          <li key={s.name}>
            <a href={s.href} target="_blank" rel="noreferrer">
              <span className="source-name">{s.name}</span>
              <span className="source-role">{s.role}</span>
              <M3eIcon name="arrow_outward" aria-hidden="true" />
              <span className="sr-only"> (opent in een nieuw tabblad)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
