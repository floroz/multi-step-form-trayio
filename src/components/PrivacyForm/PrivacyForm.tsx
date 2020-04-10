import React from "react";
import { IFormState, ValueOfIFormState } from "../Form/useFormState";
interface Props {
  onChangeHandler: (name: keyof IFormState, value: ValueOfIFormState) => void;
}

const PrivacyForm = (props: Props) => {
  return <div>Privacy Form</div>;
};

export default PrivacyForm;
