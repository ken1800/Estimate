import * as actionTypes from "../../actions/types";
const initialState = {
  inputs: null,
  isLoading: false,
};

const estimateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.IS_LOADED:
    case actionTypes.INPUTED_DATA:
      return {
        ...state,
        inputs: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default estimateReducer;
