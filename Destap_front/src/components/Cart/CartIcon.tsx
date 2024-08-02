'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import useStore from '@/store/cart/cart-store';
import { useEffect, useState } from 'react';


const CartIcon = () => {
  const {totalItems, cart} = useStore(state => ({
    cart: state.cart,
    totalItems: state.getTotalItems()
  })) 

  const [load, setLoad ] = useState(false)

  useEffect(() => { 
    setLoad(true)
  }, [cart])

  return (
    <Link href={'/carrito'}
          className="p-1 flex items-center justify-center h-10 text-gray-400 relative">
      {(load && totalItems  > 0) && (
        <span className='text-sm mr-1 bg-green-700 px-1 rounded-full text-white font-semibold absolute top-3 right-0 transform translate-x-1/2 -translate-y-1/2'>
          {totalItems}
        </span>
      )}
      <ShoppingCart />
    </Link>
  );

};

export default CartIcon;
