import { Action, ActionEnum, OrderProducts } from "./types";

const cart = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState: OrderProducts = { ProductsItems: cart };

const OrderProductsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionEnum.ADD_TO_CART:
      return { ProductsItems: action.payload };
    case ActionEnum.REMOVE_TO_CART:
      return { ProductsItems: action.payload };
    case ActionEnum.UPDATE_TO_CART:
      return { ProductsItems: action.payload };
    default:
      return state;
  }
};

export default OrderProductsReducer;
