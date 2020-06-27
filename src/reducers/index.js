import { combineReducers } from "redux";
import * as constants from "../config";
import * as util from "../util";

const initialState = {
  firstNum: 0,
  secondNum: 0,
  operator: null,
  result: 0,
  isChained: false,
  lastDigitIsOperator: false,
  negativeNumber: false
};

const getInput = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case constants.SELECT_NUMBER:
      return { ...state, ...util.getNumber(state, action) };
    case constants.SELECT_OPERATOR:
      return { ...state, ...util.getOperator(state, action) };
    case constants.SELECT_CLEAR:
      return initialState;
    case constants.SELECT_DECIMAL:
      return { ...state, ...util.checkDecimal(state) };
    case constants.SELECT_EQUAL:
      return { ...state, ...util.result(state) };
    default:
      return state;
  }
};

export default combineReducers({
  input: getInput
});
