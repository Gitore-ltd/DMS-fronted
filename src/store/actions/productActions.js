import * as types from "../constants";
import { toast } from "react-toastify";
import axios from "axios";

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
  } else {
    toast.error(res.error);
  }
};

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
 console.log(res.data.message);
 toast.success(res.data.message);


} catch (error) {
  toast.error(error.response.data.error);
}
};
