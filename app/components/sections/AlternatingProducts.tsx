import React from 'react';
import Products from './products';
import ProductTwo from './product2';

const AlternatingProducts = ({ oddProducts, evenProducts }) => {
  const maxLength = Math.max(oddProducts.length, evenProducts.length);
  const combinedProducts = [];

  for (let i = 0; i < maxLength; i++) {
    if (oddProducts[i]) {
      combinedProducts.push(
        <Products key={`odd-${i}`} products={[oddProducts[i]]} />
      );
    }
    if (evenProducts[i]) {
      combinedProducts.push(
        <ProductTwo key={`even-${i}`} products={[evenProducts[i]]} />
      );
    }
  }

  return <div className="">{combinedProducts}</div>;
};

export default AlternatingProducts;