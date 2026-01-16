export default function ProductDetail({ product, onBack }) {
  return (
    <section className="detail">
      <button className="back" onClick={onBack}>
        ← Back to disclosures
      </button>

      <h2>{product.name}</h2>

      <p className="disclaimer">
        This page presents producer-declared information.
        Hedamo does not certify, verify, or endorse disclosures.
      </p>

      <ul className="summary">
        <li><strong>Declared by:</strong> {product.declaredBy}</li>
        <li><strong>Evidence attached:</strong> {product.evidenceCount}</li>
        <li><strong>Current status:</strong> {product.status}</li>
      </ul>

      <h3>Version History</h3>
      <ul className="versions">
        {product.versions.map((v, i) => (
          <li key={i}>
            {v.date} — {v.status}
          </li>
        ))}
      </ul>
    </section>
  );
}
