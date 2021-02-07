import {
  HIDE_SPINNER,
  ORDER_COMPLETE,
  ORDER_IN_PROGRESS,
  SHOW_SPINNER,
} from "./types";

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER,
});

export const orderInProgress = () => ({
  type: ORDER_IN_PROGRESS,
});

export const orderComplete = () => ({
  type: ORDER_COMPLETE,
});
