import { ActionTypes } from '../actions/actionTypes';
import { Action } from '../actions/actions';

const initialstate = {
  user: null,
};

const reducer = (state = initialstate, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
