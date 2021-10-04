
import ShopActionTypes from './shop.types';


const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
  filteredItems:[]
};
const removeItemFromCollection = (collectionItems, itemToRemove) => {
  
  return collectionItems.map(collectionItem =>
    collectionItem.name === itemToRemove.name
      ? { ...collectionItem, stock: itemToRemove.stock-1 }
      : collectionItem
  );
}

const addItemBackToCollection = (collectionItems, itemToAdd) => {
   return collectionItems.map(collectionItem =>
    collectionItem.name === itemToAdd.name
      ? { ...collectionItem, stock: itemToAdd.stock+1 }
      : collectionItem
  );
}
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_ROBOTS_BEGIN:
     
      return {
        ...state,
        loading: true,
        error: null
      };

    case ShopActionTypes.FETCH_ROBOTS_SUCCESS:
      
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

      case ShopActionTypes.FILTER_ROBOTS:
      
      return {
        ...state,
        filteredItems:action.payload.products
      };

    case (ShopActionTypes.FETCH_ROBOTS_FAILURE):
      
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

  case(ShopActionTypes.REDUCE_FROM_INVENTORY):
  return{
    ...state,
    items:removeItemFromCollection(state.items, action.payload),
    filteredItems:removeItemFromCollection(state.filteredItems, action.payload)
  }

  case(ShopActionTypes.INCREASE_IN_INVENTORY):
  return{
    ...state,
    items:addItemBackToCollection(state.items, action.payload),
    filteredItems:removeItemFromCollection(state.filteredItems, action.payload)
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
