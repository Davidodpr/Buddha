import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 2);

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Featured Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <span className="section-tag">The Collection</span>
            <h2 className="products-title">Intelligent Bathroom Design</h2>
            <p className="products-subtitle">Japan's most advanced toilet and bidet technology, refined over decades. Precision engineering meets uncompromising comfort in every detail.</p>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <Link to={`/product/${product.slug}`} key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <span className="product-tag">{product.tag}</span>
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-overlay">
                    <span className="product-cta">View Details</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">Starting from {product.price}</p>
                  <div className="product-line" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-preview">
        <div className="container">
          <div className="tech-preview-grid">
            <div>
              <h4 className="tech-preview-title">Washlet® Technology</h4>
              <p className="tech-preview-text">The ultimate in comfort and hygiene, featuring adjustable warm water sprays and integrated drying systems.</p>
            </div>
            <div>
              <h4 className="tech-preview-title">Clean Synergy</h4>
              <p className="tech-preview-text">A combination of EWATER+, CEFIONTECT, and TORNADO FLUSH for a cleaner, more sustainable experience.</p>
            </div>
            <div>
              <h4 className="tech-preview-title">Universal Design</h4>
              <p className="tech-preview-text">Conceived to be intuitive and accessible for everyone, regardless of age or ability.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p className="footer-exclusive">Exclusive Dealers only</p>
          <div className="footer-logo">BUDDHA bath</div>
          <div className="footer-links">
            <a href="/about">Contact</a>
            <a href="#">Privacy</a>
            <a href="/collection">Catalog</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
