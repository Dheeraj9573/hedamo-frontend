import { useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

export default function ProductList({ products, onSelect }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (status ? p.status === status : true)
  );

  return (
    <>
      <Filters
        query={query}
        setQuery={setQuery}
        status={status}
        setStatus={setStatus}
      />

      {filtered.length === 0 && (
        <p className="empty">
          No disclosures match your current filters.
        </p>
      )}

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onSelect(product)}
          />
        ))}
      </div>
    </>
  );
}
