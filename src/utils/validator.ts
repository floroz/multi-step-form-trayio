/* eslint-disable no-useless-escape */
import { IFormState } from "../interfaces/index";

const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validator = (state: IFormState): IFormState => {
  const { firstName, email, password } = state;
  const newState = { ...state };

  if (firstName.value.length < 2) {
    newState.firstName.error = "Please insert a name";
  } else {
    newState.firstName.error = null;
  }

  // eslint-disable-next-line no-useless-escape
  if (!EMAIL_REGEX.test(email.value)) {
    newState.email.error = "Please insert a valid email";
  } else {
    newState.email.error = null;
  }

  if (password.value.length < 6) {
    newState.password.error =
      "Please insert a password with 6 or more characters";
  } else {
    newState.password.error = null;
  }

  return newState;
};
