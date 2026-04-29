import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { products } from '../data/products'
import './HomePage.css'

export default function HomePage() {
  const featured = products.slice(0, 4)

  return (
    <div className="homepage">
      {/* Hero */}
      <div className="hero">
        <Navbar transparent />
        <div className="hero__bg">
          {/* Placeholder hero image — replace with real photo */}
          <div className="hero__image-placeholder">
            <div className="hero__image-overlay" />
          </div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">SUMMER DELIVERY 02</h1>
          <p className="hero__subtitle">New Clothing &amp; Accessories</p>
          <Link to="/collections/summer-26" className="hero__cta">SHOP NOW</Link>
        </div>
      </div>

      {/* Collection strip */}
      <div className="collection-strip">
        <span className="collection-strip__label">SUMMER 2026</span>
        <Link to="/collections/summer-26" className="collection-strip__link">SHOP ALL</Link>
      </div>

      {/* Featured products grid */}
      <div className="products-grid container">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Second row of products */}
      <div className="products-grid container" style={{ marginTop: '40px' }}>
        {products.slice(4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
