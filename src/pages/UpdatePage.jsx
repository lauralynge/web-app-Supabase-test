import { useParams, useNavigate } from "react-router";
import ProductForm from "../components/ProductForm";

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
    // TODO (Trin 4): Implementer PATCH med fetch til `${URL}?id=eq.${id}`.
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
