import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Technology from './pages/Technology';
import Showroom from './pages/Showroom';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
