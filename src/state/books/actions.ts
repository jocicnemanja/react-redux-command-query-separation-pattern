import { GET_BOOKS, SELECT_BOOK, UPDATE_BOOKS } from "./types";

export const getBooks = () => ({
  type: GET_BOOKS,
});

export const updateBooks = (data: string) => ({
  type: UPDATE_BOOKS,
  payload: data,
});

export const selectBook = (bookId: number) => ({
  type: SELECT_BOOK,
  payload: bookId,
});
