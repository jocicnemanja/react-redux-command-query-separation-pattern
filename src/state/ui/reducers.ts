import {
  HIDE_SPINNER,
  ORDER_COMPLETE,
  ORDER_IN_PROGRESS,
  SHOW_SPINNER,
  UiAction,
} from "./types";

const initUi = {
  pending: false,
  orderInProcess: false,
};

function uiReducer(state = initUi, action: UiAction) {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, pending: true };

    case HIDE_SPINNER:
      return { ...state, pending: false };

    case ORDER_IN_PROGRESS:
      return { ...state, orderInProcess: true };

    case ORDER_COMPLETE:
      return { ...state, orderInProcess: false };

    default:
      return state;
  }
}

export default uiReducer;
