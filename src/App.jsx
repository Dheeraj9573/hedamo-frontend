import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import products from "./data/products";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Header />
      <main className="container">
        {selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <ProductList
            products={products}
            onSelect={setSelectedProduct}
          />
        )}
      </main>
    </>
  );
}
