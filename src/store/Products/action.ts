import { Dispatch } from "redux";
import { Action, ActionEnum } from "./type";
import axios from "axios";

export const getAllProducts = (skip: number, name: string) => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get(`http://localhost:3000/product/pagination`, {
        params: { skip: skip, name: name },
      })
      .then((res) => {
        dispatch({
          payload: res.data.products,
          count: res.data.count,
          type: ActionEnum.ALL_PRODUCTS_REQUEST,
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch({
          payload: [],
          type: ActionEnum.ALL_PRODUCTS_FAIL,
          count: 0,
          error: err.response.data.message,
        });
      });
  };
};
