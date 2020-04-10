import React from "react";
import { IFormState, ValueOfIFormState } from "../Form/useFormState";

interface Props {
  onChangeHandler: (name: keyof IFormState, value: ValueOfIFormState) => void;
}

const UserForm = (props: Props) => {
  return <div>UserForm</div>;
};

export default UserForm;
