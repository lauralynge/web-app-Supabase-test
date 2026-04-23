import { useParams, useNavigate } from "react-router"; // useParams: læs :id fra URL, useNavigate: send brugeren videre
import ProductForm from "../components/ProductForm"; // Formular-komponent (genbruges til create/update)

// Env-variabler til Supabase REST API
const URL = import.meta.env.VITE_SUPABASE_URL; // Endpoint til din tabel (fx .../rest/v1/products)
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY; // API-nøgle (typisk anon key i frontend)

export default function UpdatePage() {
  const { id } = useParams(); // Produktets id fra URL'en
  const navigate = useNavigate(); // Bruges efter opdatering til at gå til details-siden

  // Midlertidige testdata (senere: GET produktet og prefill formen)
  const product = {
    id,
    title: "Starter Product",
    price: 0,
    image: "",
  };

  // Kaldes når brugeren submitter formularen (ProductForm)
  async function handleSubmit(productData) {
    console.log("UpdatePage productData:", productData); // Debug: nye values fra formen

    // PATCH = opdater eksisterende række
    // ?id=eq.${id} betyder: opdater kun den række hvor id er lig med dette id
    await fetch(`${URL}?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        apikey: APIKEY,
        "Content-Type": "application/json",
      },
      // Sender de opdaterede felter som JSON
      body: JSON.stringify(productData),
    });

    // Efter opdatering: gå tilbage til details-siden for produktet
    navigate(`/products/${id}`);
  }

  return (
    <main className="app">
      <h1 className="page-title">Update Product</h1>

      {/* Placeholder: her kan du vise status, mens du henter produktdata til prefill */}
      <p className="status-msg">
        TODO (Trin 4): Implementer GET til prefill af form data.
      </p>

      {/* productToUpdate bruges typisk til at udfylde inputfelter med eksisterende værdier */}
      <ProductForm onSubmit={handleSubmit} productToUpdate={product} />
    </main>
  );
}
