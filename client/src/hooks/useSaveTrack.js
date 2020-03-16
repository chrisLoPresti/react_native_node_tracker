import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../utils/nagivationRef';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const { reset } = useContext(LocationContext);
  const {
    state: { locations, name }
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};
