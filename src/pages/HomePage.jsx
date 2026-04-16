import ProductCard from "../components/ProductCard";

const starterProducts = [
  {
    id: "starter-1",
    title: "Starter Product",
    price: 0,
    image: "",
  },
];

export default function HomePage() {
  // TODO (Trin 1): Gem env-værdier i variabler, fx:
  // const URL = import.meta.env.VITE_SUPABASE_URL;
  // const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;
  // TODO (Trin 2): Implementer GET i HomePage med useEffect/useState og fetch.
  const products = starterProducts;

  return (
    <main className="app">
      <h1 className="page-title">All Products</h1>
      <p className="status-msg">
        TODO: Implement GET products with fetch and replace starter data.
      </p>
      <section className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
