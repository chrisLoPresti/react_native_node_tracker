import createDataContext from './createDataContext';
import locationReducer from '../reducers/locationReducer';
import { ADD_CURRENT_LOCATION } from '../actionTypes/locationTypes';

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => currentLocation => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: currentLocation });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
