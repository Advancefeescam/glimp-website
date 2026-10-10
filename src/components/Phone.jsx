const base = import.meta.env.BASE_URL;

// De screenshots zijn 620×1378 (9:20), rechtstreeks uit de app.
export default function Phone({ shot, alt, eager = false, className = '' }) {
  return (
    <figure className={`phone ${className}`}>
      <img
        src={`${base}screenshots/${shot}.webp`}
        alt={alt}
        width="620"
        height="1378"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </figure>
  );
}
