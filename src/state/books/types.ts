export const GET_BOOKS = "[books] GET";
export const FETCH_BOOKS_SUCCESS = "[books] Fetch success";
export const FETCH_BOOKS_ERROR = "[books] Fetch Error";
export const UPDATE_BOOKS = "[books] Update";
export const SELECT_BOOK = "[books] Select";

export interface Book {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
}

interface UpdateBookAction {
  type: string;
  payload: string;
}

export type BookActionTypes = UpdateBookAction;
