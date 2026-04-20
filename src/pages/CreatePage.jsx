import { useNavigate } from "react-router";
import ProductForm from "../components/ProductForm";

const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function CreatePage() {
  const navigate = useNavigate();

  async function handleSubmit(productData) {
    console.log("CreatePage productData:", productData);

    // TODO (Trin 3): Implementer POST med fetch, URL/APIKEY og body fra productData.
    await fetch(URL, {
      method: "POST",
      headers: {
        apikey: APIKEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    navigate("/");
  }

  return (
    <main className="app">
      <h1 className="page-title">Create Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </main>
  );
}
