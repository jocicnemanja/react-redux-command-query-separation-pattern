export const API_REQUEST = "[app] API Request";

export interface ApiRequest {
  method: string;
  url: string;
  body?: {};
  onSuccess: string;
  onError: string;
}

export interface ApiRequestAction {
  type: string;
  payload: {};
  meta: {};
}

export type ApiActions = ApiRequestAction;
