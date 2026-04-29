import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <p className="footer__heading">SHOP</p>
          <a href="#">New Arrivals</a>
          <a href="#">Summer 2026</a>
          <a href="#">All Products</a>
          <a href="#">Sale</a>
        </div>
        <div className="footer__col">
          <p className="footer__heading">BRAND</p>
          <a href="#">About</a>
          <a href="#">Lookbook</a>
          <a href="#">Press</a>
          <a href="#">Stockists</a>
        </div>
        <div className="footer__col">
          <p className="footer__heading">SUPPORT</p>
          <a href="#">FAQ</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Size Guide</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer__col">
          <p className="footer__heading">FOLLOW</p>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 TWOJEYS. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
