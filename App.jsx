import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CollectionPage from './pages/CollectionPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/:collection" element={<CollectionPage />} />
        <Route path="/products/:product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
