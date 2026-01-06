import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Technology from './pages/Technology';
import Showroom from './pages/Showroom';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

// Simple 404 Component
const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
    <h1 className="text-6xl font-serif mb-4">404</h1>
    <p className="text-text-dim mb-8">The page you are looking for does not exist.</p>
    <Link to="/" className="btn-primary">Return Home</Link>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </main>
    </Router>
  );
}

export default App;
