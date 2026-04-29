import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { getProductsByCollection } from '../data/products'
import './CollectionPage.css'

export default function CollectionPage() {
  const { collection } = useParams()
  const products = getProductsByCollection(collection)
  const collectionLabel = collection === 'summer-26' ? 'SUMMER 2026' : collection.toUpperCase()

  return (
    <div className="collection-page">
      <Navbar />

      <div className="collection-header container">
        <div className="breadcrumb">
          <Link to="/">Shop</Link>
          <span> / </span>
          <span>{collectionLabel}</span>
        </div>
        <h1 className="collection-title">{collectionLabel}</h1>
        <p className="collection-count">{products.length} products</p>
      </div>

      <div className="collection-grid container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
