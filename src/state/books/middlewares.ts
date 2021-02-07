// this middleware only care about the getBooks action
import { Middleware } from "redux";
import { RootState } from "../reducers";
import {FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS, GET_BOOKS, SELECT_BOOK} from "./types";
import { orderInProgress, showSpinner } from "../ui/actions";
import apiRequest from "../api/actions";
import {createOrder} from "../orders/actions";

const URL = "https://www.googleapis.com/books/v1/volumes?q=react";

export const getBooksFlow: Middleware<{}, RootState> = ({ dispatch }) => (
  next
) => (action) => {
  next(action);
    console.log('GET BOOKS MIDDLEVARE')

  if (action.type === GET_BOOKS) {
      console.log('GET BOOKS MIDDLEVARE')
    dispatch(
      apiRequest({
        method: "GET",
        url: URL,
        body: {},
        onSuccess: FETCH_BOOKS_SUCCESS,
        onError: FETCH_BOOKS_ERROR,
      })
    );
    dispatch(showSpinner());
  }
};

export const selectBookFlow: Middleware<{}, RootState> = ({ dispatch }) => (
  next
) => (action) => {
  next(action);

  if (action.type === SELECT_BOOK) {
    dispatch(orderInProgress());
    dispatch(createOrder(action.payload));
  }
};
