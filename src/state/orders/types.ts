export const CREATE_ORDER = "[order] Create";
export const UPDATE_ORDER = "[order] Update";
export const SUBMIT_ORDER = "[order] Complete order";

export interface Order {
  id: number;
  details: string;
  email: string;
}

interface UpdateOrderAction {
  type: string;
  payload: string;
}

export type OrderActionTypes = UpdateOrderAction;
