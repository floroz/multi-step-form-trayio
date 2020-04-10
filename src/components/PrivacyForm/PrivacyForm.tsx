import React, { SyntheticEvent } from "react";
import useFormState, { IFormState } from "../Form/useFormState";
interface Props {
  onChangeHandler: (event: SyntheticEvent<HTMLInputElement>) => void;
  formState: IFormState;
}

const PrivacyForm = (props: Props) => {
  const { formState, onChangeHandler } = useFormState();
  const { receiveUpdate, receiveCommunication } = formState;
  return (
    <div>
      <label htmlFor="receiveUpdate">
        <input
          type="checkbox"
          name="receiveUpdate"
          id="receiveUpdate"
          checked={receiveUpdate}
          onChange={onChangeHandler}
        />
      </label>
      <label htmlFor="receiveCommunication">
        <input
          type="checkbox"
          name="receiveCommunication"
          id="receiveCommunication"
          checked={receiveCommunication}
          onChange={onChangeHandler}
        />
      </label>
    </div>
  );
};

export default PrivacyForm;
