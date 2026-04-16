import { Link } from "react-router";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo">
          🛒 Products
        </Link>
        <Link to="/create" className="btn btn-primary">
          + New Product
        </Link>
      </div>
    </header>
  );
}
