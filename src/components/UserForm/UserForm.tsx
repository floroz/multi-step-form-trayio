import React, { SyntheticEvent } from "react";
import { IFormState } from "../Form/useFormState";

interface Props {
  onChangeHandler: (event: SyntheticEvent<HTMLInputElement>) => void;
  formState: IFormState;
}

const UserForm = (props: Props) => {
  const { formState, onChangeHandler } = props;
  const { firstName, email, role, password } = formState;
  return (
    <div>
      <label htmlFor="firstName">
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="role">
        <input
          type="text"
          name="role"
          id="role"
          value={role}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="email">
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChangeHandler}
        />
      </label>
    </div>
  );
};

export default UserForm;
