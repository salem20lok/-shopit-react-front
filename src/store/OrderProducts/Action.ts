import { Action, ActionEnum, OrderProduct } from "./types";
import { Dispatch } from "redux";

import { RootState } from "../index";

export const addToCart = (state: OrderProduct) => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    let alreadyExists = false;
    const items = getState().order.ProductsItems.slice();
    items.forEach((el) => {
      if (el.product._id === state.product._id) {
        el.quantity = el.quantity + state.quantity;
        alreadyExists = true;
      }
    });
    if (!alreadyExists) {
      items.push({
        product: state.product,
        quantity: state.quantity,
      });
    }
    dispatch({
      payload: items,
      type: ActionEnum.ADD_TO_CART,
    });
    localStorage.setItem("cart", JSON.stringify(items));
  };
};

export const RemoveItem = (id: string) => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const items = getState().order.ProductsItems.slice();
    const newItems = items.filter((el) => el.product._id !== id);
    dispatch({
      payload: newItems,
      type: ActionEnum.REMOVE_TO_CART,
    });
    localStorage.setItem("cart", JSON.stringify(newItems));
  };
};

export const UpdateItem = (id: string, qte: number) => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const items = getState().order.ProductsItems.slice();
    items.forEach((el) => {
      if (el.product._id === id) {
        el.quantity = qte;
      }
    });
    dispatch({
      payload: items,
      type: ActionEnum.REMOVE_TO_CART,
    });
    localStorage.setItem("cart", JSON.stringify(items));
  };
};
