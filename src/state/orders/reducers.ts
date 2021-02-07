import { Order, OrderActionTypes, UPDATE_ORDER } from "./types";

const initOrder: Order = { id: 0, details: "", email: "" };

function orderReducer(order: Order = initOrder, action: OrderActionTypes) {
  switch (action.type) {
    case UPDATE_ORDER:
      // Todo: Is this state mutation ?
      return { ...order, payload: action.payload };

    default:
      return order;
  }
}

export default orderReducer;
