import { Action, ActionEnum, Products } from "./type";

const initialState: Products = { ProductsItems: [], count: 0, error: "" };

const ProductReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionEnum.ALL_PRODUCTS_REQUEST:
      return { ProductsItems: action.payload, count: action.count };
    case ActionEnum.ALL_PRODUCTS_FAIL:
      return {
        ProductsItems: [],
        error: action.error,
        count: action.count,
      };
    default:
      return state;
  }
};

export default ProductReducer;
