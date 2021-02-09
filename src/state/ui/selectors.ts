import { RootState } from "../reducers";

// eslint-disable-next-line import/prefer-default-export
export const uiPendingSelector = (state: RootState) => state.ui.pending;
