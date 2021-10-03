import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';


const INITIAL_STATE = {
  collections: SHOP_DATA
};
const removeItemFromCollection = (collectionItems, itemToRemove) => {
  console.log(collectionItems,   '----------', itemToRemove)
  return collectionItems.map(collectionItem =>
    collectionItem.id === itemToRemove.id
      ? { ...collectionItem, qty: itemToRemove.qty-1 }
      : collectionItem
  );
}
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case('REDUCE_FROM_INVENTORY'):
  return{
    ...state,
    collections: {...state.collections,
            items:removeItemFromCollection(state.collections.items, action.payload)   
  }
}
    default:
      return state;
  }
};

export default shopReducer;
