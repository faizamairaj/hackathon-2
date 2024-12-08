import React from 'react';

const ShopCard = () => {
  return (
    <div className="shop-card">
      <img src="10.jpg" alt="Shop Background" className="background-image" />
      <div className="text-overlay">
        <h2 className="card-title">Shop</h2>
        <p className="card-subtitle">Home &gt; Shop</p>
      </div>
    </div>
  );
};

export default ShopCard;