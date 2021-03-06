import React, { SyntheticEvent } from "react";
import { IFormState } from "../../interfaces";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./UserForm.module.scss";

interface Props {
  onChangeHandler: (event: SyntheticEvent<HTMLInputElement>) => void;
  formState: IFormState;
}

const UserForm = (props: Props) => {
  const { formState, onChangeHandler } = props;
  const { firstName, email, role, password } = formState;
  return (
    <div className={styles.userForm}>
      <label htmlFor="firstName">
        name: *
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName.value}
          onChange={onChangeHandler}
          className={firstName.error ? styles.inputError : ""}
        />
      </label>
      <ErrorMessage error={firstName.error} />
      <label htmlFor="role">
        role:
        <input
          type="text"
          name="role"
          id="role"
          value={role.value}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="email">
        email: *
        <input
          type="text"
          name="email"
          id="email"
          value={email.value}
          onChange={onChangeHandler}
          className={email.error ? styles.inputError : ""}
        />
      </label>
      <ErrorMessage error={email.error} />
      <label htmlFor="password">
        password: *
        <input
          type="password"
          name="password"
          id="password"
          value={password.value}
          onChange={onChangeHandler}
          className={password.error ? styles.inputError : ""}
        />
      </label>
      <ErrorMessage error={password.error} />
    </div>
  );
};

export default UserForm;
