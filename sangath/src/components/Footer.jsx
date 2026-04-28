import './Footer.css'

function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: 'home', label: 'Home', page: 'home' },
    { id: 'about', label: 'About Us', page: 'about' },
    { id: 'products', label: 'Products', page: 'products' },
    { id: 'exports-imports', label: 'Exports / Imports', page: 'exports-imports' },
    { id: 'quality', label: 'Quality', page: 'quality' },
    { id: 'contact', label: 'Contact Us', page: 'contact' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Sangath Global Exim</h3>
            <p className="footer-tagline">Global Trading & Marketing of Agricultural Commodities</p>
            <p className="footer-description">
              Your trusted partner in international export & import of agricultural commodities. 
              We connect global markets with quality products and reliable service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>RK Prime, Rajkot, Gujrat, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+918780044296">+91-8780044296</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="export.sangath@gmail.com">export.sangath@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-media">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <span className="social-icon">in</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <span className="social-icon">f</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <span className="social-icon">📷</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Sangath Global Exim. All rights reserved.
            </p>
            <div className="footer-legal">
              <button 
                className="legal-link"
                onClick={() => setCurrentPage('contact')}
              >
                Privacy Policy
              </button>
              <span className="separator">|</span>
              <button 
                className="legal-link"
                onClick={() => setCurrentPage('contact')}
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

