import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: '高級筆記型電腦',
      category: 'electronics',
      price: 'NT$ 35,000',
      description: '高效能處理器，適合專業工作使用',
      icon: '💻'
    },
    {
      id: 2,
      name: '無線藍牙耳機',
      category: 'electronics',
      price: 'NT$ 3,500',
      description: '主動降噪，長效電池，舒適配戴',
      icon: '🎧'
    },
    {
      id: 3,
      name: '智能手錶',
      category: 'electronics',
      price: 'NT$ 8,900',
      description: '健康追蹤，多功能運動模式',
      icon: '⌚'
    },
    {
      id: 4,
      name: '專業相機',
      category: 'electronics',
      price: 'NT$ 45,000',
      description: '高畫質成像，專業攝影首選',
      icon: '📷'
    },
    {
      id: 5,
      name: '辦公椅',
      category: 'furniture',
      price: 'NT$ 6,500',
      description: '人體工學設計，久坐不累',
      icon: '🪑'
    },
    {
      id: 6,
      name: '書桌',
      category: 'furniture',
      price: 'NT$ 4,800',
      description: '簡約設計，收納空間充足',
      icon: '🗄️'
    },
    {
      id: 7,
      name: '運動鞋',
      category: 'clothing',
      price: 'NT$ 2,800',
      description: '透氣舒適，運動休閒兩相宜',
      icon: '👟'
    },
    {
      id: 8,
      name: 'T恤',
      category: 'clothing',
      price: 'NT$ 590',
      description: '純棉材質，多色可選',
      icon: '👕'
    }
  ];

  const categories = [
    { id: 'all', name: '全部商品' },
    { id: 'electronics', name: '電子產品' },
    { id: 'furniture', name: '家具' },
    { id: 'clothing', name: '服飾' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products">
      <div className="products-header">
        <h1>產品列表</h1>
        <p>探索我們的精選商品</p>
      </div>

      <div className="products-container">
        <div className="category-filter">
          <h3>商品分類</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={selectedCategory === category.id ? 'category-btn active' : 'category-btn'}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button className="add-to-cart-btn">加入購物車</button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>此分類暫無商品</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
