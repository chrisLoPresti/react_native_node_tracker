import createDataContext from './createDataContext';
import locationReducer from '../reducers/locationReducer';
import {
  ADD_LOCATION,
  ADD_CURRENT_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  SET_TRACKING_NAME,
  RESET
} from '../actionTypes/locationTypes';

const initialState = {
  name: '',
  recording: false,
  locations: [],
  currentLocation: null
};

const startRecording = dispatch => () => {
  dispatch({ type: START_RECORDING });
};
const stopRecording = dispatch => () => {
  dispatch({ type: STOP_RECORDING });
};
const addLocation = dispatch => (currentLocation, recording) => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: currentLocation });
  if (recording) {
    dispatch({ type: ADD_LOCATION, payload: currentLocation });
  }
};

export const reset = dispatch => () => {
  dispatch({ type: RESET, payload: initialState });
};

const changeName = dispatch => name => {
  dispatch({ type: SET_TRACKING_NAME, payload: name });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  {
    changeName,
    startRecording,
    stopRecording,
    addLocation,
    reset
  },
  initialState
);
