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
    default:
      return state;
  }
};

export default productReducer;
