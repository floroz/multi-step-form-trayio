import React, { SyntheticEvent } from "react";
import { IFormState } from "../Form/useFormState";
interface Props {
  onChangeHandler: (event: SyntheticEvent<HTMLInputElement>) => void;
  formState: IFormState;
}

const PrivacyForm = (props: Props) => {
  return <div>Privacy Form</div>;
};

export default PrivacyForm;
