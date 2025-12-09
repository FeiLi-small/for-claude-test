import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // 清除該欄位的錯誤訊息
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '請輸入您的姓名';
    }

    if (!formData.email.trim()) {
      newErrors.email = '請輸入電子郵件';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '請輸入有效的電子郵件地址';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = '請輸入主旨';
    }

    if (!formData.message.trim()) {
      newErrors.message = '請輸入訊息內容';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '訊息內容至少需要 10 個字元';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('聯絡表單資料：', formData);
      setIsSubmitted(true);

      // 重置表單
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // 3秒後隱藏成功訊息
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>聯絡我們</h1>
        <p>有任何問題或建議，歡迎與我們聯繫</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>聯絡資訊</h2>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h3>地址</h3>
              <p>台北市信義區信義路五段 7 號</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h3>電子郵件</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <h3>電話</h3>
              <p>+886-2-1234-5678</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">⏰</div>
            <div className="info-content">
              <h3>營業時間</h3>
              <p>週一至週五 9:00 - 18:00</p>
              <p>週六 10:00 - 16:00</p>
            </div>
          </div>

          <div className="social-links">
            <h3>社群媒體</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">💼</a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>發送訊息</h2>
          {isSubmitted && (
            <div className="success-message">
              ✓ 訊息已成功發送！我們將盡快與您聯繫。
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">姓名 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="請輸入您的姓名"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">電子郵件 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="請輸入您的電子郵件"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">主旨 *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
                placeholder="請輸入主旨"
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">訊息 *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="請輸入您的訊息..."
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              發送訊息
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
