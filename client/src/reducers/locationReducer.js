import { ADD_CURRENT_LOCATION } from '../actionTypes/locationTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_CURRENT_LOCATION: {
      return { ...state, currentLocation: payload };
    }
    default:
      return state;
  }
};
