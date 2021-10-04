
import ShopActionTypes from './shop.types';


const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
};
const removeItemFromCollection = (collectionItems, itemToRemove) => {
  console.log(collectionItems,   '----------', itemToRemove)
  return collectionItems.map(collectionItem =>
    collectionItem.name === itemToRemove.name
      ? { ...collectionItem, stock: itemToRemove.stock-1 }
      : collectionItem
  );
}

const addItemBackToCollection = (collectionItems, itemToAdd) => {
  console.log(collectionItems,   '----------', itemToAdd)
  return collectionItems.map(collectionItem =>
    collectionItem.name === itemToAdd.name
      ? { ...collectionItem, stock: itemToAdd.stock+1 }
      : collectionItem
  );
}
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_ROBOTS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case ShopActionTypes.FETCH_ROBOTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

    case (ShopActionTypes.FETCH_ROBOTS_FAILURE):
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

  case(ShopActionTypes.REDUCE_FROM_INVENTORY):
  return{
    ...state,
    items:removeItemFromCollection(state.items, action.payload)
  }

  case(ShopActionTypes.INCREASE_IN_INVENTORY):
  return{
    ...state,
    items:addItemBackToCollection(state.items, action.payload)
  }
  

case(ShopActionTypes.SET_INITIAL_VALUES):
  return{...state,
        collections:action.payload
  }
  default:
      return state;
  }
};

export default shopReducer;
