import React, { useContext } from 'react';
import './ProductCard.css';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

const ProductCard = ({ data }) => {
  const { title, thumbnail, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([ ...cartItems, data]);
  };

  return (
    <section className="productCard">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="cardImage"
      />
      <div className="cardInfos">
        <h2 className="cardPrice">
          {formatCurrency(price, 'BRL')}
        </h2>
        <h2 className="cardTitle">{title}</h2>
      </div>
      <button
        type="button"
        className="buttonAddCart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;
