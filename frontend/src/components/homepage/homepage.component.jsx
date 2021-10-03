import React from 'react';

import CollectionPage from '../collection/collection.component'

import './homepage.styles.scss';
import './container.styles.scss'
import './cart.styles.scss'
import CartComponent from '../cart/cart.component';

const HomePage = () => {
 
  return(
  <div style={{display:'flex'}} >
     
    <div className='homepage'>
      <CollectionPage />
    </div>
    <div className='cart'>
      <CartComponent />
      </div>
    
  </div>
);
  }

export default HomePage;
