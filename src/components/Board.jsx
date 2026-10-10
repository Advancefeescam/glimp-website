// Strook onder de hero, in de stijl van een vertrekbord. Alleen feiten uit de app.
const rows = [
  { chip: '5+', color: 'green', title: 'Databronnen', note: 'gecombineerd in één app' },
  { chip: '3', color: 'orange', title: 'Weergaves', note: 'licht, donker en OLED' },
  { chip: '4', color: 'blue', title: 'Hoofdschermen', note: 'kaart, favorieten, meldingen, instellingen' },
  { chip: 'NL', color: 'red', title: 'Openbaar vervoer', note: 'gebouwd voor Nederland' },
];

export default function Board() {
  return (
    <section className="board" aria-label="Glimp in cijfers">
      <ul className="wrap board-list">
        {rows.map((r) => (
          <li key={r.title}>
            <span className={`chip ${r.color}`}>{r.chip}</span>
            <span className="board-text">
              <strong>{r.title}</strong>
              <small>{r.note}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
