import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getProductBySlug, products } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="page-content">
          <section className="page-hero">
            <div className="container">
              <h1 className="page-title">Product Not Found</h1>
              <p className="page-subtitle">The product you're looking for doesn't exist.</p>
              <Link to="/collection" className="btn-primary">Back to Collection</Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  // Get related products (excluding current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="page-content">
        {/* Breadcrumb */}
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/collection">Collection</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{product.name}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <section className="product-detail-hero">
          <div className="container">
            <div className="product-detail-grid">
              <div className="product-detail-image">
                <span className="product-tag">{product.tag}</span>
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-detail-info">
                <span className="section-tag">{product.category}</span>
                <h1 className="product-detail-title">{product.name}</h1>
                <p className="product-detail-price">Starting from {product.price}</p>
                <p className="product-detail-description">{product.description}</p>
                
                <div className="product-detail-actions">
                  <button className="btn-primary">Request Quote</button>
                  <button className="btn-secondary">Book Showroom Visit</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="product-features-section">
          <div className="container">
            <h2 className="section-title">Features & Technology</h2>
            <div className="features-grid">
              {product.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="product-specs-section">
          <div className="container">
            <h2 className="section-title">Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Dimensions</span>
                <span className="spec-value">{product.specifications.dimensions}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight</span>
                <span className="spec-value">{product.specifications.weight}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Voltage</span>
                <span className="spec-value">{product.specifications.voltage}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Warranty</span>
                <span className="spec-value">{product.specifications.warranty}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="related-products-section">
          <div className="container">
            <h2 className="section-title">You May Also Like</h2>
            <div className="products-grid">
              {relatedProducts.map((relProduct) => (
                <Link to={`/product/${relProduct.slug}`} key={relProduct.id} className="product-card">
                  <div className="product-image-wrapper">
                    <span className="product-tag">{relProduct.tag}</span>
                    <img src={relProduct.img} alt={relProduct.name} className="product-image" />
                    <div className="product-overlay">
                      <span className="product-cta">View Details</span>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{relProduct.name}</h3>
                    <p className="product-price">Starting from {relProduct.price}</p>
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

export default ProductDetail;
