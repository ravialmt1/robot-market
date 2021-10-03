import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CollectionItem from '../../components/collection-item/collection-item.component';


import './collection.styles.scss';

const CollectionPage = () => {
  const [robotList, setRobotList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/api/robots')
      .then
      (response => {
        if (response.ok) {
           return response.json();
        }
        throw response
      })
      .then(data =>        
        setRobotList(data.data)
      )
      .catch(error => {
        console.error('An Error Occured', error)
        setError(error)
      })
      .finally(setLoading(false))
  },[]
  )
  return (

    <div className='collection-page'>
      <div className='items'>
        {robotList.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>

  );
};


export default CollectionPage;
