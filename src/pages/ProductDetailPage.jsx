import { useParams, useNavigate, Link } from "react-router"; // Route param (id), navigation og link-komponent

// Env-variabler (fra .env via Vite)
const URL = import.meta.env.VITE_SUPABASE_URL; // Supabase REST endpoint
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY; // Nøgle til at kalde Supabase API

export default function ProductDetailPage() {
  const { id } = useParams(); // Henter :id fra URL'en (fx /products/123)
  const navigate = useNavigate(); // Bruges til at sende brugeren til en anden side

  // Midlertidige testdata (skal senere erstattes af GET fra databasen)
  const product = {
    id,
    title: "Starter Product",
    price: 0,
    image: "",
  };

  // Sletter produktet i databasen
  async function handleDelete() {
    const confirmed = window.confirm("Delete this product?"); // Spørger brugeren om de er sikre
    if (confirmed) {
      // DELETE request: slet rækken hvor id matcher
      await fetch(`${URL}?id=eq.${id}`, {
        method: "DELETE",
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });

      // Efter sletning: tilbage til forsiden
      navigate("/");
    }
  }

  return (
    <main className="app">
      <h1 className="page-title">Product Details</h1>

      {/* Status/placeholder mens GET ikke er implementeret endnu */}
      <p className="status-msg">
        TODO (Trin 5): Implementer GET af product details med fetch.
      </p>

      <article className="product-detail">
        {/* Vis billede hvis der findes et image-url, ellers en placeholder */}
        {product.image ? (
          <img src={product.image} alt={product.title} />
        ) : (
          <div className="image-placeholder large">?</div>
        )}

        <div className="product-detail-body">
          {/* Titel og pris */}
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-price">DKK {product.price}</p>

          {/* Knapper til edit og delete */}
          <div className="product-detail-actions">
            {/* Link til update-siden for dette produkt */}
            <Link to={`/products/${id}/update`} className="btn btn-primary">
              ✏️ Edit
            </Link>

            {/* Knap der kalder handleDelete */}
            <button className="btn btn-danger" onClick={handleDelete}>
              🗑️ Delete
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
