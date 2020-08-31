import { toast } from "react-toastify";
import axios from "axios";
import * as types from "../constants";

export const getProducts = (token) => async (dispatch) => {
  const res = await fetch(
    "https://debt-management-system.herokuapp.com/api/v1/viewAllProducts",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        token,
      },
    }
  );
  const data = await res.json();
  if (res.status === 200) {
    dispatch({
      type: types.GET_PRODUCTS,
      payload: data.allProducts,
    });
    return res;
  } 
    toast.error(res.error);
  
};

export const updateSelectedProduct = (selectedProduct) => (dispatch) => {
  return  dispatch({
    type: types.PRODUCT_SELECTED,
    payload: selectedProduct,
  });
}

export const selectedRequest = (selectedReqInfo) => (dispatch) => {
  return  dispatch({
    type: types.REQUEST_SELECTED,
    payload: selectedReqInfo,
  });
}



export const addProduct = (product) => async (dispatch) => {
  try {
  const res = await axios.post(
    "https://debt-management-system.herokuapp.com/api/v1/addProduct",
    {
      ...product,
    },
    {
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("user-token"),
      },
    }
  );
  toast.success(res.data.message);
} catch (error) {
  toast.error(error.response.data.error);
}
};


export const requestLoan = (loanData) => async (dispatch) => {
  try {          
    const res = await axios.post(
        "https://debt-management-system.herokuapp.com/api/v1/requestLoan", loanData,
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem("user-token"),
            "Access-Control-Allow-Origin": "*"
          },
        }
      );

      if(res.data || res.data.status === 200){
        toast.success(res.data.messsage);
      }
  } catch (error) {
    toast.error('Loan request was made earlier, please check again your inputs!');
  }
};