import { combineReducers } from "redux";
import uiReducer from "./ui/reducers";
import booksReducer from "./books/reducers";
import orderReducer from "./orders/reducers";

export const reducers = combineReducers({
  ui: uiReducer,
  books: booksReducer,
  order: orderReducer,
});

export type RootState = ReturnType<typeof reducers>;
