import { UPDATE_BOOKS, Book } from "./types";

function booksReducer(books: Book[] = [], action: any) {
  switch (action.type) {
    case UPDATE_BOOKS:
      return action.payload;

    default:
      return books;
  }
}

export default booksReducer;
