import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import authReducer from '../reducers/authReducer';
import trackerApi from '../api/tracker';
import { SIGN_UP, SIGN_IN } from '../actionTypes/authTypes';
import { navigate } from '../utils/nagivationRef';

const automaticSignin = dispatch => async () => {
  const token = AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: SIGN_IN, payload: { token } });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const signup = dispatch => async ({ email, password, verifyPassword }) => {
  try {
    const response = await trackerApi.post('signup', {
      email,
      password,
      verifyPassword
    });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: SIGN_UP, payload: response.data });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: SIGN_UP, payload: { error: { ...err.response.data } } });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('signin', {
      email,
      password
    });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: SIGN_IN, payload: response.data });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: SIGN_IN, payload: { error: { ...err.response.data } } });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, automaticSignin },
  { token: null, error: { email: null, password: null, verifyPassword: null } }
);
