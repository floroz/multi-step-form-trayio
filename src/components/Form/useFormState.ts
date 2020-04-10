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
  receiveUpdate: true,
  receiveCommunication: true,
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
      // let checkboxValue;
      // if (action.payload.name === "receiveUpdate") {
      //   checkboxValue = state["receiveUpdate"];
      //   return {
      //     ...state,
      //     receiveUpdate: !checkboxValue,
      //   };
      // } else if (action.payload.name === "receiveCommunication") {
      //   checkboxValue = state["receiveCommunication"];
      //   return {
      //     ...state,
      //     receiveCommunication: !checkboxValue,
      //   };
      // }
      /**
       * Default logic for text input
       */
      console.log(action.payload.name);
      console.log(action.payload.value);
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

  const nextStep = React.useCallback((): void => {
    dispatch({
      type: NEXT_STEP,
    });
  }, []);

  const prevStep = React.useCallback((): void => {
    dispatch({
      type: PREV_STEP,
    });
  }, []);

  const onChangeHandler = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>): void => {
      const { name, value } = event.target as HTMLInputElement;

      dispatch({
        type: UPDATE_FORM_FIELD,
        payload: {
          name,
          value,
        },
      });
    },
    []
  );

  const onCheckHandler = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>): void => {
      const { name, checked } = event.target as HTMLInputElement;
      dispatch({
        type: UPDATE_FORM_FIELD,
        payload: {
          name,
          value: checked,
        },
      });
    },
    []
  );

  const onSubmitForm = React.useCallback(
    (event: SyntheticEvent<HTMLFormElement>): void => {
      event.preventDefault();

      // validation

      // if everything goes okay then go to done
      nextStep();

      // print form
      console.log(`
      Form Submitted:
      First Name: ${formState.firstName}
      Role: ${formState.role}
      Email: ${formState.email}
      Receives Tray.io updates: ${formState.receiveUpdate ? "Yes" : "No"}
      Receives Communication: ${formState.receiveCommunication ? "Yes" : "No"}
    `);
    },
    [nextStep, formState]
  );

  const clearForm = React.useCallback(
    (): void => dispatch({ type: CLEAR_FORM }),
    []
  );

  return {
    formState,
    nextStep,
    prevStep,
    onChangeHandler,
    onCheckHandler,
    onSubmitForm,
    clearForm,
  };
};

export default useFormState;
