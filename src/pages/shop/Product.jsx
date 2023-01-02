import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className='w-[300px] flex flex-col justify-center items-center rounded-[15px] shadow-lg p-4'>
      <img src={productImage} />
      <div className='text-center'>
        <p className='font-bold'>{productName}</p>
        <p className='font-bold'>${price}</p>
      </div>
      <button
        onClick={() => addToCart(id)}
        className='bg-transparent border-solid border-2 border-[rgb(19,19,19)] min-w-[100px] px-[10px] py-[5px] rounded-[15px] hover:bg-[rgb(19,19,19)] hover:text-white hover:cursor-pointer'
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
