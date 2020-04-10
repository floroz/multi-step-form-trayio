import React, { SyntheticEvent } from "react";
import reducer, { initialState } from "./reducer";
import {
  PREV_STEP,
  NEXT_STEP,
  UPDATE_FORM_FIELD,
  CLEAR_FORM,
} from "./actionTypes";

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

      const {
        firstName,
        email,
        role,
        receiveCommunication,
        receiveUpdate,
      } = formState;
      // validation

      // if everything goes okay then go to done
      nextStep();

      // print form

      console.log(`
      Form Submitted!
      First Name: ${firstName.value}
      Role: ${role.value}
      Email: ${email.value}
      Receives Tray.io updates: ${receiveUpdate.value ? "Yes" : "No"}
      Receives Communication: ${receiveCommunication.value ? "Yes" : "No"}
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
