import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from '../../components/collection-item/collection-item.component';
import { setInitialValues } from '../../redux/shop/shop.actions';
import { selectCollections } from '../../redux/shop/shop.selectors';


import './collection.styles.scss';

const CollectionPage = (props) => {
  console.log(props.collections);
  // text box and button, on button click setMaterial
  return (
    <div className='collection-page'>
      <div className='items'>
        {props.collections.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>

  );
};


export default CollectionPage;
