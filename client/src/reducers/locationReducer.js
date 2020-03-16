import {
  ADD_LOCATION,
  ADD_CURRENT_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  SET_TRACKING_NAME
} from '../actionTypes/locationTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_TRACKING_NAME: {
      return { ...state, name: payload };
    }
    case ADD_LOCATION: {
      console.log(payload);
      return { ...state, locations: [...state.locations, payload] };
    }
    case START_RECORDING: {
      return { ...state, recording: true };
    }
    case STOP_RECORDING: {
      return { ...state, recording: false };
    }
    case ADD_CURRENT_LOCATION: {
      return { ...state, currentLocation: payload };
    }
    default:
      return state;
  }
};
