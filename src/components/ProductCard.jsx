import StatusBadge from "./StatusBadge";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="card"
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <h3>{product.name}</h3>
      <p className="muted">{product.category}</p>
      <p>Declared by: {product.producer}</p>
      <StatusBadge status={product.status} />
      <small>Last updated: {product.updatedAt}</small>
    </div>
  );
}
