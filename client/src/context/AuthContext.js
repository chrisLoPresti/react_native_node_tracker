import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import authReducer from '../reducers/authReducer';
import trackerApi from '../api/tracker';
import { SIGN_UP, SIGN_IN, SIGN_OUT } from '../actionTypes/authTypes';
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

const SignUp = dispatch => async ({ email, password, verifyPassword }) => {
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

const SignIn = dispatch => async ({ email, password }) => {
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

const SignOut = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGN_OUT });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { SignUp, SignIn, automaticSignIn, SignOut },
  { token: null, error: { email: null, password: null, verifyPassword: null } }
);
