import {ActionType} from '../../action';
import {extend} from '../../../utils';
import {AuthorizationStatus} from '../../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {email: null}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(
          state,
          {authorizationStatus: action.payload}
      );

    case ActionType.SET_AUTH_INFO:
      return extend(
          state,
          {authInfo: action.payload}
      );

    default:
      return state;
  }
};

export {user};
