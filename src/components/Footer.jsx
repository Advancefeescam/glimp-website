import { links } from '../links';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="Glimp, terug naar boven">
            <img src={import.meta.env.BASE_URL + 'assets/glimp-icon-192.png'} alt="" width="38" height="38" />
            <span>glimp<span className="brand-stop">.</span></span>
          </a>
          <p>Jouw reis, in één oogopslag.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigatie">
          <div><strong>Ontdekken</strong><a href="#functies">Functies</a><a href="#weergave">Weergave</a><a href="#installeren">Downloaden</a></div>
          <div><strong>Project</strong><a href={links.repo} target="_blank" rel="noopener noreferrer">Broncode</a><a href={links.issues} target="_blank" rel="noopener noreferrer">Feedback</a><a href="#gegevens">Databronnen</a></div>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <span>© Glimp · Openbaar vervoer, overzichtelijk gemaakt.</span>
        <span>Glimp is onafhankelijk. Informatie en beschikbaarheid verschillen per databron.</span>
      </div>
    </footer>
  );
}
