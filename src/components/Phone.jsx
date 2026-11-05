const base = import.meta.env.BASE_URL;

// Bestaande screenshots tonen echte Glimp-schermen; de telefoonomlijsting is decoratief.
export default function Phone({ shot, alt, eager = false, className = '' }) {
  return (
    <figure className={'phone ' + className}>
      <img
        src={base + 'screenshots/' + shot + '.webp'}
        alt={alt}
        width="640"
        height="1412"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager && shot === 'map' ? 'high' : undefined}
        decoding="async"
      />
    </figure>
  );
}
