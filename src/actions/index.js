import { SET_PRODUCTS, SELECTED_PRODUCT, DELETE_PRODUCT } from "./actionTypes";
import fakeStoreApi from "../apis/fakesStoreApi";
import { get } from 'lodash' 

//Using redux-thunk- apllying API data to the app
//app will ba waiting for dispatch data from API
export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await fakeStoreApi.get("/products");

    dispatch({
    type: SET_PRODUCTS,
    payload: get(response, 'data', [])
  });
  } catch(err){
    dispatch({
      type: SET_PRODUCTS,
      payload: []
    });
  }
};

export const selectedProduct = (productId) => {
  return {
    type: SELECTED_PRODUCT,
    payload: productId
  };
};

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: productId
  };
};
