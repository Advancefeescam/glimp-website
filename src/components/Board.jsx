const highlights = [
  { index: '01', title: 'Vind je halte', text: 'Alles begint op de kaart.', color: 'mint' },
  { index: '02', title: 'Zie wat vertrekt', text: 'De volgende ritten op een rij.', color: 'blue' },
  { index: '03', title: 'Kies jouw route', text: 'Vergelijk je reisopties.', color: 'orange' },
];

export default function Board() {
  return (
    <section className="journey-band" aria-label="Van halte naar bestemming">
      <div className="wrap journey-band-inner">
        <p className="journey-intro">Van hier <span aria-hidden="true">→</span> naar daar.</p>
        <ol className="journey-stops">
          {highlights.map((item) => (
            <li key={item.index}>
              <span className={'journey-node ' + item.color} aria-hidden="true" />
              <div>
                <span className="journey-step">{item.index} / {item.title}</span>
                <span className="journey-detail">{item.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
