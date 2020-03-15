import { SIGN_UP, SIGN_IN } from '../actionTypes/authTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case SIGN_UP: {
      const {
        error = { email: null, password: null, verifyPassword: null },
        token
      } = payload;
      return { error, token };
    }
    case SIGN_IN: {
      const { token } = payload;
      return { error: {}, token };
    }
    default:
      return state;
  }
};
