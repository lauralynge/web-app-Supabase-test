import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-image">
        {product.image ? <img src={product.image} alt={product.title} /> : <div className="image-placeholder">?</div>}
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-price">DKK {product.price}</p>
      </div>
    </Link>
  );
}
