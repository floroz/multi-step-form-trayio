import React from "react";
import UserForm from "../UserForm/UserForm";
import PrivacyForm from "../PrivacyForm/PrivacyForm";
import Done from "../Done/Done";
import Button from "../Button/Button";
import useFormState from "../../hooks/useFormState";
import styles from "./Form.module.scss";

const Form = () => {
  const {
    formState,
    onChangeHandler,
    onCheckHandler,
    prevStep,
    nextStep,
    clearForm,
    onSubmitForm,
  } = useFormState();
  const { step } = formState;

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <UserForm onChangeHandler={onChangeHandler} formState={formState} />
        );
      case 1:
        return (
          <PrivacyForm onCheckHandler={onCheckHandler} formState={formState} />
        );
      case 2:
        return <Done />;
      default:
        return (
          <UserForm onChangeHandler={onChangeHandler} formState={formState} />
        );
    }
  };

  const renderButtonGroup = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Button onClick={nextStep} primary>
              Next
            </Button>
          </>
        );
      case 1:
        return (
          <>
            <Button onClick={prevStep}>Previous</Button>
            <Button onClick={onSubmitForm} primary>
              Submit
            </Button>
          </>
        );
      case 2:
        return <Button onClick={clearForm}>Reset</Button>;
      default:
        return;
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={step === 0 ? styles.selectedStep : ""}>
          <span>User</span>
        </div>
        <div className={step === 1 ? styles.selectedStep : ""}>
          <span>Privacy</span>
        </div>
        <div className={step === 2 ? styles.selectedStep : ""}>
          <span>Done</span>
        </div>
      </header>
      <form className={styles.form} noValidate>
        {renderStep()}
      </form>
      <div className={styles.buttonGroup}>{renderButtonGroup()}</div>
    </main>
  );
};

export default Form;
