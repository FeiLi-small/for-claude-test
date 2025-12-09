import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-icon">🏠</span>
          <span className="logo-text">我的網站</span>
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className={isMobileMenuOpen ? 'hamburger active' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
              onClick={closeMobileMenu}
            >
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className={isActive('/products') ? 'nav-link active' : 'nav-link'}
              onClick={closeMobileMenu}
            >
              產品列表
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              onClick={closeMobileMenu}
            >
              聯絡我們
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-link nav-link-login"
              onClick={closeMobileMenu}
            >
              登入
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
