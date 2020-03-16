import { FETCH_TRACKS } from '../actionTypes/trackTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case FETCH_TRACKS: {
      return payload;
    }
    default:
      return state;
  }
};
