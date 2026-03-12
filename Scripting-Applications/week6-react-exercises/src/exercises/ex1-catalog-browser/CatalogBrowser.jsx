import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import ProductCard from './ProductCard';
import useFetchJSON from '../../hooks/useFetchJSON';
import './styles.css';

const CatalogBrowser = () => {
  const { data, loading, error } = useFetchJSON('/exercises/ex1-catalog-browser/data/catalog.json');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = data ? data.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="catalog-browser">
      <h2>Product Catalog</h2>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {filteredProducts.length === 0 && !loading && <p>No products found.</p>}
      
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogBrowser;