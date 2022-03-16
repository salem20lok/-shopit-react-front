import { combineReducers } from "redux";
import ProductReducer from "./Products/reducer";
import OrderProductsReducer from "./OrderProducts/Reducer";

const reducers = combineReducers({
  products: ProductReducer,
  order: OrderProductsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
