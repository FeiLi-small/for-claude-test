import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">歡迎來到我們的網站</h1>
          <p className="hero-subtitle">
            探索優質產品，體驗卓越服務
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              瀏覽產品
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              聯絡我們
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span className="placeholder-icon">🚀</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">我們的特色</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>快速便捷</h3>
            <p>高效的服務流程，為您節省寶貴時間</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>精準定位</h3>
            <p>精確滿足您的需求，提供最適合的解決方案</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>品質保證</h3>
            <p>嚴格的品質控管，確保最高標準</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>專業服務</h3>
            <p>經驗豐富的團隊，提供專業諮詢</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>準備開始了嗎？</h2>
          <p>立即加入我們，體驗更多優質服務</p>
          <Link to="/register" className="btn btn-cta">
            立即註冊
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
