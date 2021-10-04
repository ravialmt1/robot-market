import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import { reduceFromInvetory, increaseInInvetory } from '../../redux/shop/shop.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-item.styles.scss';

const cartItem = ({ cartItem, clearItemFromCart, addItem, removeItem, cartItems, reduceFromInvetory, items, increaseInInvetory }) => {
  const { name,  price, quantity } = cartItem;
  //const {items} = props
  console.log( name);
  const existingCollectionItem = items.find(
    item => item.name === name
  );
  
  const addItemInCart = () => {
    
      addItem(cartItem);
      reduceFromInvetory(existingCollectionItem);
    }
  
    const removeItemInCart = () => {
    
      //removeItem(cartItem);
      increaseInInvetory(existingCollectionItem);
    }
    
  return (
    <div className='cart-item'>
      
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={ removeItemInCart}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemInCart }>
          &#10095;
        </div>
      </span>
      <span className='price'>{new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price)}</span>
      <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  items: state => state.shop.items,
  // total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  reduceFromInvetory: item=>dispatch(reduceFromInvetory(item)),
  increaseInInvetory: item =>dispatch(increaseInInvetory(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cartItem);
