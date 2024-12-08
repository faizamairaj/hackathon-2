import React from 'react';
import { FaTrophy, FaCheckCircle, FaGift, FaHeadphones } from 'react-icons/fa';

const ShopIcons = () => {
  return (
    <div className="shop-icons">
      <div className="icon-container">
        <FaTrophy className="icon" />
        <h3 className="icon-heading">High Quality</h3>
        <p className="icon-text">Crafted from top materials</p>
      </div>
      <div className="icon-container">
        <FaCheckCircle className="icon" />
        <h3 className="icon-heading">Warranty Protection</h3>
        <p className="icon-text">Over 2 years</p>
      </div>
      <div className="icon-container">
        <FaGift className="icon" />
        <h3 className="icon-heading">FREE Shipping</h3>
        <p className="icon-text">Order over $150</p>
      </div>
      <div className="icon-container">
        <FaHeadphones className="icon" />
        <h3 className="icon-heading">24/7 Service</h3>
        <p className="icon-text">Dedicated support</p>
      </div>
    </div>
  );
};

export default ShopIcons;