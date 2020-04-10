import { IFormState, IAction } from "../interfaces/index";
import {
  NEXT_STEP,
  PREV_STEP,
  UPDATE_FORM_FIELD,
  CLEAR_FORM,
} from "./actionTypes";

export const initialState: IFormState = {
  step: 0,
  firstName: {
    value: "",
    error: null,
  },
  role: "",
  email: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
  },
  receiveUpdate: true,
  receiveCommunication: true,
};

const FIRST_PAGE_INDEX: number = 0;
const LAST_PAGE_INDEX: number = 2;

export default (state: IFormState = initialState, action: IAction) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step === LAST_PAGE_INDEX ? state.step : state.step + 1,
      };
    case PREV_STEP:
      return {
        ...state,
        step: state.step === FIRST_PAGE_INDEX ? state.step : state.step - 1,
      };
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case CLEAR_FORM:
      return initialState;
    default:
      return initialState;
  }
};
