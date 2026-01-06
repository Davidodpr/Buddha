import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { products } from '../data/products';

const Collection = () => {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <section className="page-hero">
          <div className="container">
            <span className="section-tag">Explore</span>
            <h1 className="page-title">The Collection</h1>
            <p className="page-subtitle">Discover our complete range of luxury bathroom fixtures, each crafted with precision and designed for ultimate comfort.</p>
          </div>
        </section>

        <section className="collection-grid-section">
          <div className="container">
            <div className="collection-filters">
              <button className="filter-btn active">All Products</button>
              <button className="filter-btn">Intelligent Toilets</button>
              <button className="filter-btn">Bidet Seats</button>
              <button className="filter-btn">Accessories</button>
            </div>

            <div className="collection-grid">
              {products.map((product) => (
                <Link to={`/product/${product.slug}`} key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <span className="product-tag">{product.category}</span>
                    <img src={product.img} alt={product.name} className="product-image" />
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
      </main>
    </>
  );
};

export default Collection;
