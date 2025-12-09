import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes with Navbar */}
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/products" element={<><Navbar /><Products /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />

          {/* Auth routes without Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
