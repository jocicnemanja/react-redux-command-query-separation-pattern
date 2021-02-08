export const GET_BOOKS = "[books] GET";
export const FETCH_BOOKS_SUCCESS = "[books] Fetch success";
export const FETCH_BOOKS_ERROR = "[books] Fetch Error";
export const UPDATE_BOOKS = "[books] Update";
export const SELECT_BOOK = "[books] Select";

export interface Book {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
}

export interface BookDTO {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

interface UpdateBookAction {
  type: string;
  payload: {};
}

export type BookActionTypes = UpdateBookAction;
