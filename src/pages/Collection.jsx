import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { products } from '../data/products';

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Products' },
    { id: 'Intelligent Toilet', label: 'Intelligent Toilets' },
    { id: 'Bidet Seat', label: 'Bidet Seats' },
    { id: 'Premium Series', label: 'Premium Series' }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

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
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="collection-grid">
              {filteredProducts.map((product) => (
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-dim">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Collection;
