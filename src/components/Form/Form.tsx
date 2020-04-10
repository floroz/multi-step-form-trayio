import React from "react";
import UserForm from "../UserForm/UserForm";
import PrivacyForm from "../PrivacyForm/PrivacyForm";
import Done from "../Done/Done";
import useFormState from "./useFormState";

const Form = () => {
  const {
    formState,
    onChangeHandler,
    clearForm,
    prevStep,
    nextStep,
  } = useFormState();
  const { step } = formState;

  const renderStep = () => {
    switch (step) {
      case 0:
        return <UserForm onChangeHandler={onChangeHandler} />;
      case 1:
        return <PrivacyForm onChangeHandler={onChangeHandler} />;
      case 2:
        return <Done />;
      default:
        return <UserForm onChangeHandler={onChangeHandler} />;
    }
  };

  return (
    <main>
      <header>Header Tabs</header>
      {renderStep()}
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </main>
  );
};

export default Form;
