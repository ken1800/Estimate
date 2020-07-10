import * as actionTypes from "../types";
import { createMessage } from "../messages";

export const getInputedata = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.IS_LOADING,
  });

  setTimeout(
    () =>
      dispatch(createMessage({ dataReceived: "Data received succesfully" })),
    1000
  );

  setTimeout(
    () =>
      dispatch({
        type: actionTypes.INPUTED_DATA,
        payload: data,
      }),
    2000
  );
};
