import { UPDATE_BOOKS, BookActionTypes, Book } from "./types";

function booksReducer(books: Book[] = [], action: BookActionTypes) {
  switch (action.type) {
    case UPDATE_BOOKS:
      return action.payload;

    default:
      return books;
  }
}

export default booksReducer;
