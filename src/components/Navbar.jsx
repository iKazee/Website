import React, { useState, useEffect } from 'react';
import cartIcon from "../assets/handbag.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic lives here so it works wherever this navbar is placed
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">AURA</div>

      <ul className="nav-links">
        <li>Products</li>
        <li>Security</li>
        <li>Log in</li>
        <li>About Us</li>

        <li className="cart-item">
          <button className="cart-button">
            <img src={cartIcon} alt="Cart" className="cart-img" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;