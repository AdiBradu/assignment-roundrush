import { ActionTypes } from '../actions/actionTypes';
import { LoginUserAction } from '../actions/actions';

interface InitialState {
  credentials: {
    email: string;
    password: string;
  };
  isLoggedIn: boolean;
}

const initialstate: InitialState = {
  credentials: {
    email: '',
    password: '',
  },
  isLoggedIn: false,
};

const reducer = (state = initialstate, action: LoginUserAction) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        credentials: action.payload.credentials,
      };
    case ActionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
};

export default reducer;
