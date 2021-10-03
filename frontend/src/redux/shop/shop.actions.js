import ShopActionTypes from './shop.types';

export const reduceFromInvetory = item => ({
  type: 'REDUCE_FROM_INVENTORY',
  payload:item
});