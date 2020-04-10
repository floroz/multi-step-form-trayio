import React from "react";
import styles from "./Done.module.scss";
interface Props {}

const Done = (props: Props) => {
  return (
    <div className={styles.done}>
      Please verify your console log, you should find printed the results of the
      form
    </div>
  );
};

export default Done;
