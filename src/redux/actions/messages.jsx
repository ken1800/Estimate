import * as actionType from "./types";

// CREATE MESSAGE
export const createMessage = (msg) => {
  return {
    type: actionType.GET_MESSAGE,
    payload: msg,
  };
};

// RETURN ERRORS
// export const returnErrors = (msg, status) => {
//   return {
//     type: actionType.GET_ERRORS,
//     payload: { msg, status },
//   };
// };
