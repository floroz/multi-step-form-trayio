import React from "react";

export interface IFormState {
  step: number;
  firstName: string;
  role: string;
  email: string;
  password: string;
  receiveUpdate: boolean;
  receiveCommunication: boolean;
}

type ValueOf<T> = T[keyof T];

export type ValueOfIFormState = ValueOf<IFormState>;

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IFormState = {
  step: 0,
  firstName: "",
  role: "",
  email: "",
  password: "",
  receiveUpdate: false,
  receiveCommunication: false,
};

const NEXT_STEP: string = "NEXT_STEP";
const PREV_STEP: string = "PREV_STEP";
const UPDATE_FORM_FIELD: string = "UPDATE_FORM_FIELD";
const CLEAR_FORM: string = "CLEAR_FORM";

const reducer = (state: IFormState = initialState, action: IAction) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step === 2 ? state.step : state.step + 1,
      };
    case PREV_STEP:
      return {
        ...state,
        step: state.step === 0 ? state.step : state.step - 1,
      };
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case CLEAR_FORM:
      return initialState;
    default:
      return initialState;
  }
};

const useFormState = () => {
  const [formState, dispatch] = React.useReducer(reducer, initialState);

  const nextStep = (): void => {
    dispatch({
      type: NEXT_STEP,
    });
  };

  const prevStep = (): void => {
    dispatch({
      type: PREV_STEP,
    });
  };

  const onChangeHandler = (
    name: keyof IFormState,
    value: ValueOfIFormState
  ): void => {
    dispatch({
      type: UPDATE_FORM_FIELD,
      payload: {
        name,
        value,
      },
    });
  };

  const clearForm = (): void => dispatch({ type: CLEAR_FORM });

  return {
    formState,
    nextStep,
    prevStep,
    onChangeHandler,
    clearForm,
  };
};

export default useFormState;
