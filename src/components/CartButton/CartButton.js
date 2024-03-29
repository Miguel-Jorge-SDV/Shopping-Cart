import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartButton.css';
import AppContext from '../../context/AppContext';

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cartButton"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cartStatus">{cartItems.length}</span>}
    </button>
  );
};

export default CartButton;
