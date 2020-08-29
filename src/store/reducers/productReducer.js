import { initialState } from "../intialState";
import * as types from "../constants";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case types.ADD_PRODUCT:
      return state;
    case types.LOAN_REQUEST:
      return state;
    case types.PRODUCT_SELECTED:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
