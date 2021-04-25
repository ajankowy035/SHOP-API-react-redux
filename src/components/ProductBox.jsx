import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProducts } from "../actions";
import './css/ProductBox.css';

const ProductBox = () => {
  const products = useSelector((state) => state.products.products)
  useEffect(() => {
    fetchProducts();
  }, [products]);

  const renderItems = () => {
    if(products){
      return <div className='app__products__items'> { products.map(product => (<div className='app__products__items__item'>
      <img className='app__products__items__item__img' src={product.image} alt={product.id} /> 
      <div className='app__products__items__item__text'>
      <h2 className='app__products__items__item__text__title'>{product.title}</h2>
      <h3 className='app__products__items__item__text__price'>{`${product.price} $` }</h3>
      </div>

      </div>)) } </div>
  
    }
  };

  return <div>{renderItems()}</div>;
};

export default ProductBox;
