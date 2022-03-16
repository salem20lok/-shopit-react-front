import { Product } from "../../@types/products";

export enum ActionEnum {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_TO_CART = "REMOVE_TO_CART",
  UPDATE_TO_CART = "UPDATE_TO_CART",
}

export interface OrderProducts {
  ProductsItems: OrderProduct[];
}

export interface OrderProduct {
  product: Product;
  quantity: number;
}

export interface Action {
  payload: OrderProduct[];
  type: string;
}
