import React from 'react';
import CustomButton from '../custom-button/custom-button.component';


import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { name, price, image, material, stock, createdAt } = item;
  console.log(name,price,material)
  const addItemInCart = () => console.log('item'); 
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
      { stock>0? <CustomButton onClick={addItemInCart} inverted>
        Add to cart
      </CustomButton> : null }
    </div>
  );
};


export default CollectionItem;
