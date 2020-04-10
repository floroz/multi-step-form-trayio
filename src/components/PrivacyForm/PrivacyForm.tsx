import React, { SyntheticEvent } from "react";
import { IFormState } from "../../interfaces";
import styles from "./PrivacyForm.module.scss";
interface Props {
  onCheckHandler: (event: SyntheticEvent<HTMLInputElement>) => void;
  formState: IFormState;
}

const PrivacyForm = (props: Props) => {
  const { onCheckHandler, formState } = props;
  const { receiveUpdate, receiveCommunication } = formState;
  return (
    <div className={styles.privacyForm}>
      <label htmlFor="receiveUpdate">
        <input
          type="checkbox"
          name="receiveUpdate"
          id="receiveUpdate"
          checked={receiveUpdate}
          onChange={onCheckHandler}
        />
        Receive updates about Tray.io product by email
      </label>
      <label htmlFor="receiveCommunication">
        <input
          type="checkbox"
          name="receiveCommunication"
          id="receiveCommunication"
          checked={receiveCommunication}
          onChange={onCheckHandler}
        />
        Receive communication by email for other products
      </label>
    </div>
  );
};

export default PrivacyForm;
