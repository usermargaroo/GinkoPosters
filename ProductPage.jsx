import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getProductById, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './ProductPage.css'

export default function ProductPage() {
  const { product: productId } = useParams()
  const product = getProductById(productId)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openSection, setOpenSection] = useState(null)

  if (!product) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '80px 24px', textAlign: 'center' }}>
          <p>Product not found.</p>
          <Link to="/">← Back to shop</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-page__breadcrumb container">
        <Link to="/">Shop</Link>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="product-layout container">
        {/* Left: image gallery */}
        <div className="product-gallery">
          <div className="product-gallery__thumbnails">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`thumb-btn ${selectedImage === i ? 'thumb-btn--active' : ''}`}
                onClick={() => setSelectedImage(i)}
              >
                <img src={img} alt={`${product.name} view ${i + 1}`} />
              </button>
            ))}
          </div>

          <div className="product-gallery__main">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="product-gallery__main-img"
            />
          </div>
        </div>

        {/* Right: product info */}
        <div className="product-info">
          <h1 className="product-info__name">{product.name}</h1>
          <p className="product-info__meta">{product.material} · {product.color}</p>

          {/* Color swatches */}
          <div className="product-info__variants">
            {product.variants.map(variant => {
              const variantProduct = products.find(
                p => p.name.includes(variant) && p.name.includes(product.name.split(' ')[0] + ' ' + product.name.split(' ')[1])
              ) || product
              return (
                <Link
                  key={variant}
                  to={`/products/${variantProduct.id}`}
                  className={`variant-swatch ${variantProduct.id === product.id ? 'variant-swatch--active' : ''}`}
                  title={variant}
                >
                  <img src={variantProduct.thumbnail} alt={variant} />
                </Link>
              )
            })}
          </div>

          {/* Size selector */}
          <div className="product-info__sizes">
            {product.sizes.map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'size-btn--active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add to cart */}
          <button
            className={`add-to-cart ${!selectedSize ? 'add-to-cart--disabled' : ''}`}
            onClick={() => selectedSize && alert(`Added ${product.name} (${selectedSize}) to bag!`)}
          >
            {selectedSize ? `ADD TO BAG — $${product.price}.00` : `SELECT SIZE — $${product.price}.00`}
          </button>

          <p className="product-info__shipping">Free shipping on orders over $170</p>

          {/* Accordion sections */}
          <div className="accordion">
            <AccordionItem
              title="Features"
              isOpen={openSection === 'features'}
              onToggle={() => toggleSection('features')}
            >
              <ul className="accordion__list">
                {product.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Size & fit"
              isOpen={openSection === 'size'}
              onToggle={() => toggleSection('size')}
            >
              <p>Model is 6'0" and wearing size M. Fits true to size with a relaxed, boxy silhouette.</p>
            </AccordionItem>

            <AccordionItem
              title="Product care"
              isOpen={openSection === 'care'}
              onToggle={() => toggleSection('care')}
            >
              <p>Machine wash cold. Tumble dry low. Do not bleach. Do not iron print.</p>
            </AccordionItem>

            <AccordionItem
              title="Shipping & returns"
              isOpen={openSection === 'shipping'}
              onToggle={() => toggleSection('shipping')}
            >
              <p>Free shipping to United States on orders over $170. Returns accepted within 30 days of delivery.</p>
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="related-header">
          <span className="related-label">YOU MAY ALSO LIKE</span>
          <Link to="/collections/summer-26" className="related-link">SHOP ALL</Link>
        </div>
        <div className="related-grid">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

function AccordionItem({ title, isOpen, onToggle, children }) {
  return (
    <div className="accordion-item">
      <button className="accordion-item__header" onClick={onToggle}>
        <span>{title}</span>
        <span className="accordion-item__icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-item__body">
          {children}
        </div>
      )}
    </div>
  )
}
