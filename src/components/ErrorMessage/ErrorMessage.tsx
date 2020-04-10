import React from "react";
import styles from "./ErrorMessage.module.scss";

interface Props {
  error: string | null;
}

const ErrorMessage = (props: Props) => {
  const { error } = props;

  if (!error) return null;

  return (
    <div className={styles.error} data-testid="error">
      {error}
    </div>
  );
};

export default ErrorMessage;
