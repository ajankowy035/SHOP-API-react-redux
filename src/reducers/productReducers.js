import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  DELETE_PRODUCT
} from "../actions/actionTypes";

const initialState = [];

export default function shopProducts(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SELECTED_PRODUCT:
      return state.filter((product) => product.id === action.payload);
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}
