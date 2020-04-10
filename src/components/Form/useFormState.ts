import React, { SyntheticEvent } from "react";

export interface IFormState {
  step: number;
  firstName: string;
  role: string;
  email: string;
  password: string;
  receiveUpdate: boolean;
  receiveCommunication: boolean;
}

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
      /**
       * Logic for handling checkbox change
       */
      let checkboxValue;
      if (action.payload.name === "receiveUpdate") {
        checkboxValue = state["receiveUpdate"];
        return {
          ...state,
          receiveUpdate: !checkboxValue,
        };
      } else if (action.payload.name === "receiveCommunication") {
        checkboxValue = state["receiveCommunication"];
        return {
          ...state,
          receiveCommunication: !checkboxValue,
        };
      }
      /**
       * Default logic for text input
       */
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

  const onChangeHandler = (event: SyntheticEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as HTMLInputElement;

    dispatch({
      type: UPDATE_FORM_FIELD,
      payload: {
        name,
        value,
      },
    });
  };

  const onSubmitForm = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // validation

    console.log(`
      Form Submitted:
      First Name: ${formState.firstName}
      Role: ${formState.role}
      Email: ${formState.email}
    `);
  };

  const clearForm = (): void => dispatch({ type: CLEAR_FORM });

  return {
    formState,
    nextStep,
    prevStep,
    onChangeHandler,
    onSubmitForm,
    clearForm,
  };
};

export default useFormState;
