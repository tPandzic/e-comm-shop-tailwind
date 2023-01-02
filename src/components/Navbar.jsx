import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

const Navbar = () => {
  return (
    <div className='flex justify-end items-center w-full h-[80px] bg-[rgb(19,19,19)] '>
      <div className='flex items-center mr-[50px]'>
        <Link className='no-underline text-white mr-[20px] text-[25px]' to='/'>
          Shop
        </Link>
        <Link
          className='no-underline text-white mr-[20px] text-[25px]'
          to='/cart'
        >
          <ShoppingCart size='32' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
