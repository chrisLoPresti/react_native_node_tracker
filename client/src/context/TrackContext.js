import createDataContext from './createDataContext';
import trackReducer from '../reducers/trackReducer';
import trackerApi from '../api/tracker';
import { FETCH_TRACKS } from '../actionTypes/trackTypes';

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: FETCH_TRACKS, payload: response.data });
};

const createTrack = () => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
