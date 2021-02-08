import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers";
import apiMiddlewares from "./api/middlewares";
import booksMiddlewares from "./books/middlewares";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...booksMiddlewares, ...apiMiddlewares))
);

export default store;
