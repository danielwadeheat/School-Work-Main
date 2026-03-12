import React from 'react';
import './styles.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-category">{product.category}</p>
    </div>
  );
};

export default ProductCard;