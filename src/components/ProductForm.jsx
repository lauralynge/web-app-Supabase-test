import { useState } from "react";
import { useNavigate } from "react-router";

export default function ProductForm({ onSubmit, productToUpdate }) {
  const [title, setTitle] = useState(productToUpdate?.title || "");
  const [price, setPrice] = useState(productToUpdate?.price || "");
  const [image, setImage] = useState(productToUpdate?.image || "");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({ title, price: Number(price), image });
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            name="title"
            placeholder="Product title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Price *</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-field" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            placeholder="https://..."
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          {image && <img src={image} alt="Preview" className="image-preview" />}
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {productToUpdate ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
