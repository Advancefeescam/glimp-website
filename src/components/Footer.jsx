import { links } from '../links';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <a className="brand" href="#top" aria-label="Glimp, naar boven">
            <img src={`${import.meta.env.BASE_URL}assets/glimp-icon-192.png`} alt="" width="34" height="34" />
            <span>glimp</span>
          </a>
          <p className="footer-tag">Jouw reis, in één oogopslag.</p>
        </div>

        <nav className="footer-links" aria-label="Links">
          <a href={links.releases} target="_blank" rel="noreferrer">Releases</a>
          <a href={links.issues} target="_blank" rel="noreferrer">Feedback en bugs</a>
          <a href="#gegevens">Gegevensbronnen</a>
        </nav>

        <p className="footer-fine">
          Glimp combineert gegevens van externe diensten. Beschikbaarheid en actualiteit kunnen
          verschillen. App-schermafbeeldingen zijn afkomstig uit Glimp.
        </p>
      </div>
    </footer>
  );
}
