import { Middleware } from "redux";
import { RootState } from "../reducers";
import {
  Book,
  BookDTO,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_SUCCESS,
  GET_BOOKS,
  SELECT_BOOK,
} from "./types";
import { hideSpinner, orderInProgress, showSpinner } from "../ui/actions";
import apiRequest from "../api/actions";
import { createOrder } from "../orders/actions";
import { updateBooks } from "./actions";

const URL = "https://www.googleapis.com/books/v1/volumes";

const getBooksFlow: Middleware<{}, RootState> = ({ dispatch }) => (next) => (
  action
) => {
  next(action);
  if (action.type === GET_BOOKS) {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${URL}?q=${action.payload}`,
        body: {},
        onSuccess: FETCH_BOOKS_SUCCESS,
        onError: FETCH_BOOKS_ERROR,
      })
    );
    dispatch(showSpinner());
  }
};

const processBooksCollection: Middleware<{}, RootState> = ({ dispatch }) => (
  next
) => (action) => {
  next(action);
  if (action.type === FETCH_BOOKS_SUCCESS) {
    dispatch(
      updateBooks(
        action.payload.items.map(
          (bookDto: BookDTO): Book => ({
            id: bookDto?.id,
            title: bookDto.volumeInfo?.title,
            description: bookDto.volumeInfo?.subtitle,
            thumbnail: bookDto.volumeInfo?.imageLinks?.thumbnail,
          })
        )
      )
    );
    dispatch(hideSpinner());
  }
};

const selectBook: Middleware<{}, RootState> = ({ dispatch }) => (next) => (
  action
) => {
  next(action);

  if (action.type === SELECT_BOOK) {
    dispatch(orderInProgress());
    dispatch(createOrder(action.payload));
  }
};

const booksMiddlewares: Middleware<{}, RootState>[] = [
  getBooksFlow,
  processBooksCollection,
  selectBook,
];

export default booksMiddlewares;
