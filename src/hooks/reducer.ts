import { IFormState, IAction } from "../interfaces/index";
import {
  NEXT_STEP,
  PREV_STEP,
  UPDATE_FORM_FIELD,
  CLEAR_FORM,
} from "./actionTypes";
import { validator } from "../utils/validator";

export const initialState: IFormState = {
  step: 0,
  firstName: {
    value: "",
    error: null,
  },
  role: {
    value: "",
  },
  email: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
  },
  receiveUpdate: {
    value: true,
  },
  receiveCommunication: {
    value: true,
  },
};

const FIRST_PAGE_INDEX: number = 0;
const LAST_PAGE_INDEX: number = 2;

export default (state: IFormState = initialState, action: IAction) => {
  switch (action.type) {
    case NEXT_STEP:
      // if is not the first page just proceed
      if (state.step !== 0) {
        return {
          ...state,
          step: state.step === LAST_PAGE_INDEX ? state.step : state.step + 1,
        };
      } else {
        // if it's the first page run the validator
        const newState: IFormState = validator(state);
        let hasError = false;

        for (let key in newState) {
          if (newState[key]?.error !== null) {
            hasError = true;
          }
        }

        return {
          ...newState,
          step:
            state.step === LAST_PAGE_INDEX || hasError
              ? state.step
              : state.step + 1,
        };
      }
    case PREV_STEP:
      return {
        ...state,
        step: state.step === FIRST_PAGE_INDEX ? state.step : state.step - 1,
      };
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
        },
      };
    case CLEAR_FORM:
      return initialState;
    default:
      return initialState;
  }
};
