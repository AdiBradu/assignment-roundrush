import { ActionTypes } from './actionTypes';

interface USER {
  user: {
    email: string;
    password: string;
  };
}

interface Login {
  type: ActionTypes.LOGIN;
  payload: USER;
}

export const ActionCreators = {
  login: (user: USER) => ({
    type: ActionTypes.LOGIN,
    payload: {
      user,
    },
  }),
};

export type Action = Login;
