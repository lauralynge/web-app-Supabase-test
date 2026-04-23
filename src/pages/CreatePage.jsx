import { useNavigate } from "react-router"; // Hook: gør det muligt at navigere til en anden route i kode
import ProductForm from "../components/ProductForm"; // Formular-komponent til at oprette et produkt

// Env-variabler (fra .env via Vite)
const URL = import.meta.env.VITE_SUPABASE_URL; // Supabase REST endpoint til din tabel
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY; // API-nøgle til Supabase

export default function CreatePage() {
  const navigate = useNavigate(); // Funktion til at sende brugeren til fx "/"

  // Kører når ProductForm bliver submitted
  async function handleSubmit(productData) {
    console.log("CreatePage productData:", productData); // Debug: se hvad der bliver sendt

    // POST = opret ny række i databasen
    await fetch(URL, {
      method: "POST",
      headers: {
        apikey: APIKEY, // Giver adgang til Supabase REST API
        "Content-Type": "application/json", // Vi sender JSON
      },
      body: JSON.stringify(productData), // Konverter JS-objekt -> JSON-string
    });

    // Når produktet er oprettet: tilbage til forsiden
    navigate("/");
  }

  return (
    <main className="app">
      <h1 className="page-title">Create Product</h1>

      {/* ProductForm kalder onSubmit(productData) når brugeren trykker submit */}
      <ProductForm onSubmit={handleSubmit} />
    </main>
  );
}
