import { useEffect, useState } from "react"; // Hooks: state (data) + effect (kør kode når komponenten loader)
import ProductCard from "../components/ProductCard"; // Komponent der viser ét produkt

// Env-variabler til Supabase REST API
const URL = import.meta.env.VITE_SUPABASE_URL; // Endpoint til din tabel (fx .../rest/v1/products?select=*)
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY; // API-nøgle (typisk anon key)

export default function HomePage() {
  // products = data vi viser på siden. setProducts = opdaterer data.
  const [products, setProducts] = useState([]);

  // useEffect kører 1 gang når siden/componenten render første gang (pga. [] til sidst)
  useEffect(() => {
    // Debug: tjek at env vars faktisk bliver læst
    console.log("VITE_SUPABASE_URL:", URL);
    console.log("VITE_SUPABASE_APIKEY:", APIKEY);

    // Henter produkter fra Supabase (GET)
    async function getProducts() {
      try {
        const response = await fetch(URL, {
          // headers fortæller Supabase hvem du er (apikey) og at vi arbejder med JSON
          headers: {
            apikey: APIKEY,
            "Content-Type": "application/json",
          },
        });

        // Konverterer JSON-svaret til et JavaScript-array/objekt
        const data = await response.json();

        // Gemmer data i state -> React re-render og viser produkterne på siden
        setProducts(data);
      } catch (error) {
        // Hvis fetch fejler (netværk, forkert URL, RLS, osv.)
        console.error("Fejl i GET:", error);
      }
    }

    // Kalder funktionen
    getProducts();
  }, []);

  return (
    <main className="app">
      <h1 className="page-title">All Products</h1>

      <section className="product-list">
        {/* Loop igennem alle produkter og render et ProductCard per produkt */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
