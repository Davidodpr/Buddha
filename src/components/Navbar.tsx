import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-sm' : 'py-8'}`}>
        <div className="container px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className={`logo-wrapper flex items-center gap-3 ${scrolled ? 'text-black' : 'text-white'}`}>
              <span className="logo-icon">☸</span>
              <div className="logo-text">
                <span className="logo-main">BUDDHA</span>
                <span className="logo-sub">bath</span>
              </div>
            </Link>
            
            <div className={`hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium ${scrolled ? 'text-black/70' : 'text-white/70'}`}>
              <Link to="/collection" className="nav-link">Collection</Link>
              <Link to="/technology" className="nav-link">Technology</Link>
              <Link to="/showroom" className="nav-link">Showroom</Link>
              <Link to="/about" className="nav-link">About</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className={`${scrolled ? 'text-black' : 'text-white'}`}>
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button 
              className={`${scrolled ? 'text-black' : 'text-white'} md:hidden`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          >
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-header">
                <div className="logo-wrapper text-black">
                  <span className="logo-icon">☸</span>
                  <div className="logo-text">
                    <span className="logo-main">BUDDHA</span>
                    <span className="logo-sub">bath</span>
                  </div>
                </div>
                <button onClick={closeMenu} className="mobile-menu-close">
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              
              <nav className="mobile-menu-nav">
                <Link to="/collection" className="mobile-menu-link" onClick={closeMenu}>Collection</Link>
                <Link to="/technology" className="mobile-menu-link" onClick={closeMenu}>Technology</Link>
                <Link to="/showroom" className="mobile-menu-link" onClick={closeMenu}>Showroom</Link>
                <Link to="/about" className="mobile-menu-link" onClick={closeMenu}>About</Link>
              </nav>
              
              <div className="mobile-menu-footer">
                <p className="mobile-menu-tagline">Exclusive Japanese Bathroom Design</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
