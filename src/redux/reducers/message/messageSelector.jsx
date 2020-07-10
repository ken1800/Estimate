import { createSelector } from "reselect";

const selectMessage = (state) => state.message;

export const selectedMessages = createSelector(
  [selectMessage],
  (message) => message.messo
);
