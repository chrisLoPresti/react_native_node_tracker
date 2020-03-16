import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  CLEAR_AUTH_ERRORS
} from '../actionTypes/authTypes';

const defaultError = { email: null, password: null, verifyPassword: null };

export default (state, { type, payload }) => {
  switch (type) {
    case SIGN_UP: {
      const { error = defaultError, token } = payload;
      return { error, token };
    }
    case SIGN_IN: {
      const { error = defaultError, token } = payload;
      return { error, token };
    }
    case CLEAR_AUTH_ERRORS:
    case SIGN_OUT: {
      return {
        error: defaultError,
        token: null
      };
    }
    default:
      return state;
  }
};
