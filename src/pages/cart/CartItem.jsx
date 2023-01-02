import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className='flex justify-center items-center m-[30px] w-[700px] h-[250px] rounded-[25px] shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>
      <img className='w-[200px]' src={productImage} />
      <div className='w-[400px] text-[30px]'>
        <p className='font-bold text-center'>{productName}</p>
        <p className='text-center'>${price}</p>
        <div className='flex justify-center'>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            className='w-[40px] text-center font-bold'
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
