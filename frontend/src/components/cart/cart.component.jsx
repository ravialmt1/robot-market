import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './cart.styles.scss';

const CartComponent = ({ cartItems=[], total }) => (
  <div className='cart-page'>
    <div className='cart-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <div className='header-block'><CartItem key={cartItem.id} cartItem={cartItem} props /></div>
    ))}
    <div className='total'>TOTAL: {new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(total)}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CartComponent);
