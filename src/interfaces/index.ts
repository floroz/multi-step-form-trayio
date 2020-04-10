export interface IFormState {
  step: number;
  firstName: {
    value: string;
    error: string | null;
  };
  role: string;
  email: {
    value: string;
    error: string | null;
  };
  password: {
    value: string;
    error: string | null;
  };
  receiveUpdate: boolean;
  receiveCommunication: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}
