import { M3eIcon } from '@m3e/react/icon';
import { links } from '../links';

const productLinks = [
  { label: 'Functies', href: '#functies' },
  { label: 'De ervaring', href: '#weergave' },
  { label: 'Installeren', href: '#installeren' },
];

const communityLinks = [
  { label: 'GitHub', href: links.repo },
  { label: 'Releases', href: links.releases },
  { label: 'Feedback', href: links.issues },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-upper">
        <div className="footer-brand-block">
          <a className="footer-logo" href="#top" aria-label="Glimp, terug naar boven">
            <img src={import.meta.env.BASE_URL + 'assets/glimp-icon.webp'} alt="" width="48" height="48" />
            <span>glimp<span>.</span></span>
          </a>
          <h2>Tot aan je<br />volgende halte.</h2>
          <p>De wereld beweegt. Glimp helpt je overzicht te houden.</p>
        </div>
        <div className="footer-nav-wrap">
          <nav aria-label="Website">
            <h3>Ontdek</h3>
            {productLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </nav>
          <nav aria-label="Glimp op GitHub">
            <h3>Project</h3>
            {communityLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                {link.label} <M3eIcon name="arrow_outward" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="wrap footer-lower">
        <span>© {new Date().getFullYear()} Glimp</span>
        <span>Onafhankelijke OV-app. Geen officiële dienst van vervoerders of databronnen.</span>
        <a href="#top">Terug naar boven <M3eIcon name="arrow_upward" aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
