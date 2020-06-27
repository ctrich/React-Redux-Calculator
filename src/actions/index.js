import * as constants from "../config";

export const selectNumber = number => {
  return {
    type: constants.SELECT_NUMBER,
    payload: number
  };
};

export const selectOperator = operator => {
  return {
    type: constants.SELECT_OPERATOR,
    payload: operator
  };
};

export const selectClear = () => {
  return {
    type: constants.SELECT_CLEAR
  };
};

export const selectDecimal = () => {
  return {
    type: constants.SELECT_DECIMAL
  };
};

export const selectEqual = () => {
  return {
    type: constants.SELECT_EQUAL
  };
};
