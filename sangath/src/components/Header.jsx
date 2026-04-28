import { useState } from 'react'
import './Header.css'
import logo from "../assets/logo.png";


function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Home', page: 'home' },
    { id: 'about', label: 'About Us', page: 'about' },
    { id: 'products', label: 'Products', page: 'products' },
    { id: 'exports-imports', label: 'Exports / Imports', page: 'exports-imports' },
    { id: 'quality', label: 'Quality', page: 'quality' },
    { id: 'contact', label: 'Contact Us', page: 'contact' }
  ]

  const handleQuoteClick = () => {
    setCurrentPage('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="header">
  
      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="header-logo" onClick={() => setCurrentPage('home')}>
              
               <div className="logo-wrapper">
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="logo-image"
              />
            </a>
          </div>
            </div>

            <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <ul className="nav-menu">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={currentPage === item.page ? 'active' : ''}
                      onClick={() => {
                        setCurrentPage(item.page)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <button className="btn-quote" onClick={handleQuoteClick}>
                Request a Quote
              </button>
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

