import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import ExportsImports from './pages/ExportsImports'
import Quality from './pages/Quality'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [categories, setCategories] = useState([])

  // Load products to have them available for detail navigation
  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setCategories(data.categories || []))
      .catch(err => console.error('App products load error', err))
  }, [])

  const handleViewProduct = (product) => {
    setSelectedProduct(product)
    setCurrentPage('product-detail')
  }

  const renderPage = () => {
    if (currentPage === 'product-detail' && selectedProduct) {
      return (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setCurrentPage('products')}
          categories={categories}
          onSelectProduct={setSelectedProduct}
        />
      )
    }

    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'products':
        return (
          <Products 
            setCurrentPage={setCurrentPage} 
            onViewDetails={handleViewProduct} 
          />
        )
      case 'about':
        return <About />
      case 'exports-imports':
        return <ExportsImports setCurrentPage={setCurrentPage} />
      case 'quality':
        return <Quality />
      case 'contact':
        return <Contact />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
