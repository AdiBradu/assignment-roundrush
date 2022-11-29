import { ActionTypes } from './actionTypes';
interface SET_USER {
  credentials: {
    email: string;
    password: string;
  };
}

interface SET_AUTHENTICATED {
  isLoggedIn: boolean;
}

interface SET_USER_ACTION {
  type: ActionTypes.SET_USER;
  payload: SET_USER;
}

interface SET_AUTHENTICATED_ACTION {
  type: ActionTypes.SET_AUTHENTICATED;
  payload: SET_AUTHENTICATED;
}

export const ActionCreators = {
  setUser: (credentials: SET_USER) => ({
    type: ActionTypes.SET_USER,
    payload: credentials,
  }),
  setAuthenicated: (isLoggedIn: boolean) => ({
    type: ActionTypes.SET_AUTHENTICATED,
    payload: { isLoggedIn },
  }),
};

export type LoginUserAction = SET_USER_ACTION | SET_AUTHENTICATED_ACTION;
