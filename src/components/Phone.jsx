const base = import.meta.env.BASE_URL;

// Schermafbeeldingen zijn 640×1412, zonder de zwarte gebaarzone onderaan,
// zodat het frame overal even strak sluit.
export default function Phone({ shot, alt, eager = false, className = '' }) {
  return (
    <figure className={`phone ${className}`}>
      <img
        src={`${base}screenshots/${shot}.webp`}
        alt={alt}
        width="640"
        height="1412"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </figure>
  );
}
