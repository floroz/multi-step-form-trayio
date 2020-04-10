interface IFormState {
  step: number;
  firstName: string;
  role: string;
  email: string;
  password: string;
  receiveUpdate: boolean;
  receiveCommunication: boolean;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IFormState = {
  step: 1,
  firstName: "",
  role: "",
  email: "",
  password: "",
  receiveUpdate: false,
  receiveCommunication: false,
};

const NEXT_STEP: string = "NEXT_STEP";
const PREV_STEP: string = "PREV_STEP";
const UPDATE_FORM_FIELD: string = "UPDATE_FORM_FIELD";
const CLEAR_FORM: string = "CLEAR_FORM";

const reducer = (state: IFormState = initialState, action: IAction) => {
  switch (action.type) {
    case NEXT_STEP:
      return;
    case PREV_STEP:
      return;
    case UPDATE_FORM_FIELD:
      return;
    case CLEAR_FORM:
      return initialState;
    default:
      return initialState;
  }
};

const useFormState = () => {
  return null;
};

export default useFormState;
