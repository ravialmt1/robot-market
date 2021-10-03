import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { reduceFromInvetory } from '../../redux/shop/shop.actions';

const CollectionItem = ({ item, addItem, cartItems, reduceFromInvetory }) => {
  const { name, price, image, material, stock, createdAt } = item;
 
  const checkItem = cartItem => {
    console.log(cartItem, name)
    return cartItem.name === name;

  }

  const addItemInCart = id => {
    const existingCartItem = cartItems.find(
      checkItem
    );

    
    if (cartItems.length >= 5 && existingCartItem === undefined)
      alert(JSON.stringify("More number"));
    else {
      addItem(item);
      reduceFromInvetory(item);
    }
  }

  return (
    <div className='collection-item'>
      <div className='collection-header'>
        <span className='name'>{name}</span>
        <span className='date'>{new Date(createdAt).toLocaleDateString("en-US")}</span>
      </div>
      <div
        className='image'

      ><img src={image} alt="image" /></div>
      <div className='collection-footer'>
        <span className='price'>Price</span>
        <span className='price'>Material</span>
        <span className='stock'>Stock</span>
      </div>
      <div className='collection-footer'>
        <span className='price'>{price}</span>
        <span className='price'>{material}</span>
        <span className='stock'>{stock}</span>
      </div>
      {stock > 0 ? <CustomButton onClick={addItemInCart} inverted>
        Add to cart
      </CustomButton> : null}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  reduceFromInvetory: item => dispatch(reduceFromInvetory(item))
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  // total: selectCartTotal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);