import { Product } from "../../@types/products";

export enum ActionEnum {
  ALL_PRODUCTS_REQUEST = "ALL_PRODUCTS_REQUEST",
  ALL_PRODUCTS_FAIL = "ALL_PRODUCTS_FAIL",
}

export interface Products {
  ProductsItems: Product[];
  error?: String;
  count: number;
}

export interface Action {
  type: string;
  count: number;
  payload: Product[];
  error?: String;
}
