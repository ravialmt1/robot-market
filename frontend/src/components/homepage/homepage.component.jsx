import React from 'react';

import CollectionPage from '../collection/collection.component'

import './homepage.styles.scss';
import './container.styles.scss'
import './cart.styles.scss'

const HomePage = () => {
 
  return(
  <div className='container'>
     
    <div className='homepage'>
      <CollectionPage />
    </div>
    
  </div>
);
  }

export default HomePage;
