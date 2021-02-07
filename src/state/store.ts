import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducers";
import api from "./api/middlewares";
import { getBooksFlow } from "./books/middlewares";

const store = createStore(reducers, applyMiddleware(getBooksFlow, api));

export default store;
