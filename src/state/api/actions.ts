import { API_REQUEST, ApiRequest } from "./types";

const apiRequest = ({ method, url, body, onSuccess, onError }: ApiRequest) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError },
});

export default apiRequest;
