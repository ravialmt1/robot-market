import ShopActionTypes from './shop.types';

export const reduceFromInvetory = item => ({
  type: ShopActionTypes.REDUCE_FROM_INVENTORY,
  payload:item
});

export const increaseInInvetory = item => ({
  type: ShopActionTypes.INCREASE_IN_INVENTORY,
  payload:item
});

export const setInitialValues = data => ({
  type:ShopActionTypes.SET_INITIAL_VALUES,
  payload:data
});

export const fetchRobotsBegin = () => ({
  type: ShopActionTypes.FETCH_ROBOTS_BEGIN
});

export const fetchRobotsSuccess = products => ({
  type: ShopActionTypes.FETCH_ROBOTS_SUCCESS,
  payload: { products }
});

export const fetchRobotsFailure = error => ({
  type: ShopActionTypes.FETCH_ROBOTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchRobotsBegin());
    return fetch('http://localhost:8000/api/robots')
    .then(response => {
      if (response.ok) {return response.json();
      }
      throw response
    })
      .then(data => {
        dispatch(fetchRobotsSuccess(data.data));
        return data.data;
      })
      .catch(error =>
        dispatch(fetchRobotsFailure(error))
      );
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}