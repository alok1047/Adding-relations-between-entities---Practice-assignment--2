import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const initialProducts = [
  { id: 1, name: "Laptop", description: "High-performance laptop", avgRating: 4.2, totalRatings: 5 },
  { id: 2, name: "Smartphone", description: "Latest-gen smartphone", avgRating: 3.8, totalRatings: 8 },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones", avgRating: 4.5, totalRatings: 12 }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const updatedTotal = product.totalRatings + 1;
          const updatedAvg = ((product.avgRating * product.totalRatings) + newRating) / updatedTotal;
          return { ...product, avgRating: updatedAvg, totalRatings: updatedTotal };
        }
        return product;
      })
    );
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
}

export default App;