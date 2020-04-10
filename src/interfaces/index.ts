export interface IFormState {
  step: number;
  firstName: {
    value: string;
    error: string | null;
  };
  role: { value: string };
  email: {
    value: string;
    error: string | null;
  };
  password: {
    value: string;
    error: string | null;
  };
  receiveUpdate: { value: boolean };
  receiveCommunication: { value: boolean };
  [key: string]: any;
}

export interface IAction {
  type: string;
  payload?: any;
}
