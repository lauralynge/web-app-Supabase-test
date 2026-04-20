import { useParams, useNavigate } from "react-router";
import ProductForm from "../components/ProductForm";

// TODO: Gem env-værdier i variabler, fx:
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = {
    id,
    title: "Starter Product",
    price: 0,
    image: "",
  };

  async function handleSubmit(productData) {
    console.log("UpdatePage productData:", productData);

    await fetch(`${URL}?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        apikey: APIKEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    navigate(`/products/${id}`);
  }

  return (
    <main className="app">
      <h1 className="page-title">Update Product</h1>
      <p className="status-msg">
        TODO (Trin 4): Implementer GET til prefill af form data.
      </p>
      <ProductForm onSubmit={handleSubmit} productToUpdate={product} />
    </main>
  );
}
