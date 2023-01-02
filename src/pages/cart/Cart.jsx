import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mt-4'>
        <h1 className='font-bold text-3xl'>Your Cart Items</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div>
          <p className='text-center font-bold text-xl'>
            Subtotal: ${totalAmount}
          </p>
          <button
            onClick={() => navigate('/')}
            className='w-[150px] h-[50px] bg-[rgba(10,10,10)] text-white border-none rounded-[8px] m-[10px] cursor-pointer'
          >
            Continue Shopping
          </button>
          <button className='w-[150px] h-[50px] bg-[rgba(10,10,10)] text-white border-none rounded-[8px] m-[10px] cursor-pointer'>
            Checkout
          </button>
        </div>
      ) : (
        <h1 className='font-bold text-4xl'>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
