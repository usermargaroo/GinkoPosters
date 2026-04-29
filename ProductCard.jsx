import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">${product.price}</p>
      </div>
    </Link>
  )
}
