import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

// TODO (Trin 1): Gem env-værdier i variabler, fx:
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function HomePage() {
  const [products, setProducts] = useState([]);

  // TODO (Trin 2): Implementer GET i HomePage med useEffect/useState og fetch.
  useEffect(() => {
    console.log("VITE_SUPABASE_URL:", URL);
    console.log("VITE_SUPABASE_APIKEY:", APIKEY);

    async function getProducts() {
      try {
        // await response.json() konverterer svaret til JavaScript-data, som kan gemmes i state.
        const response = await fetch(URL, {
          // URL er endpointet (hvor requesten sendes hen)
          headers: {
            apikey: APIKEY, // apikey i headers giver adgang til Supabase Data API.
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fejl i GET:", error);
      }
    }

    getProducts();
  }, []);

  return (
    <main className="app">
      <h1 className="page-title">All Products</h1>
      <section className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
