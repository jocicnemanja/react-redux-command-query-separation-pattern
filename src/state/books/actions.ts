import { Book, GET_BOOKS, SELECT_BOOK, UPDATE_BOOKS } from "./types";

export const getBooks = (data: string = "react") => ({
  type: GET_BOOKS,
  payload: data,
});

export const updateBooks = (data: Book[]) => ({
  type: UPDATE_BOOKS,
  payload: data,
});

export const selectBook = (bookId: number) => ({
  type: SELECT_BOOK,
  payload: bookId,
});
