import { Middleware } from "redux";
import { RootState } from "../reducers";
import { API_REQUEST } from "./types";

const api: Middleware<{}, RootState> = ({ dispatch }) => (next) => (action) => {
  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;

    fetch(url, { method })
      .then((response) => {
        console.log("RESPONSE", response);
        return response.json();
      })
      .then((data) => dispatch({ type: onSuccess, payload: data }))
      .catch((error) => dispatch({ type: onError, payload: error }));
  }
  return next(action);
};

export default api;
