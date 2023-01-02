import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';

const Shop = () => {
  return (
    <div className='m-[100px]'>
      <div className='mb-[100px] text-center text-[40px] place-items-center w-full'>
        <h1>Tomislav's Shop</h1>
      </div>

      <div className='grid grid-cols-4 gap-16'>
        {PRODUCTS.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
