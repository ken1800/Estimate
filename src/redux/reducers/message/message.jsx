import * as actionTypes from "../../actions/types";

const initialState = {
  messo: {},
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MESSAGE:
      return {
        ...state,
        messo: action.payload,
      };

    default:
      return state;
  }
};

export default message;
