import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import authReducer from '../reducers/authReducer';
import trackerApi from '../api/tracker';
import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  CLEAR_AUTH_ERRORS
} from '../actionTypes/authTypes';
import { navigate } from '../utils/nagivationRef';

const automaticSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: SIGN_IN, payload: { token } });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const signUp = dispatch => async ({ email, password, verifyPassword }) => {
  try {
    const response = await trackerApi.post('SignUp', {
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

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('SignIn', {
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

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGN_OUT });
  navigate('loginFlow');
};

const clearErrors = dispatch => () => dispatch({ type: CLEAR_AUTH_ERRORS });

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, automaticSignIn, signOut, clearErrors },
  { token: null, error: { email: null, password: null, verifyPassword: null } }
);
