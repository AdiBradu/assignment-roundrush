import { ActionTypes } from '../actions/actionTypes';
import { LoginUserAction } from '../actions/actions';
import dummyUser from '../../data/user';

interface InitialState {
  user: {
    credentials: {
      email: string;
      password: string;
    };
    isLoggedIn: boolean;
  };
}

const initialstate: InitialState = {
  user: {
    credentials: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  },
};

const reducer = (state = initialstate, action: LoginUserAction) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
