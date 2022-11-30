import { ActionTypes } from './actionTypes';
interface LOGIN_USER_DATA {
  credentials: {
    email: string;
    password: string;
  };
  isLoggedIn: boolean;
}

interface LOGIN_USER_ACTION {
  type: ActionTypes.LOGIN_USER;
  payload: LOGIN_USER_DATA;
}

export const ActionCreators = {
  loginUser: (user: LOGIN_USER_DATA) => ({
    type: ActionTypes.LOGIN_USER,
    payload: user,
  }),
};

export type LoginUserAction = LOGIN_USER_ACTION;
