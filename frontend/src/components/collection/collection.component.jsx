import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from '../../components/collection-item/collection-item.component';
import { setInitialValues } from '../../redux/shop/shop.actions';
import { selectCollections } from '../../redux/shop/shop.selectors';
import DropDown from '../dropdown.component';

import './collection.styles.scss';

const CollectionPage = (props) => {
  let roboList = [];
  const robotList = useSelector(state => state.shop.items)
  const filteredItems = useSelector(state => state.shop.filteredItems)
  if(filteredItems.length<1){
  roboList = robotList;
  }
  else
  {
  roboList = filteredItems;
  }

  
  // text box and button, on button click setMaterial
  return (
    <>
    
        <DropDown />
    <div className='collection-page'>
      <div className='items'>
        {roboList.map(item => (
          <CollectionItem key={item.name} item={item} />
        ))}
      </div>
    </div>
</>
  );
};


export default CollectionPage;
