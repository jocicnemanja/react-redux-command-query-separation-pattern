import { CREATE_ORDER, SUBMIT_ORDER, UPDATE_ORDER } from "./types";

export const createOrder = (bookId: number) => ({
  type: CREATE_ORDER,
  payload: bookId,
});

export const updateOrder = (details: string) => ({
  type: UPDATE_ORDER,
  payload: details,
});

export const submitOrder = (email: string) => ({
  type: SUBMIT_ORDER,
  payload: email,
});
