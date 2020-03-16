import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } = useContext(
    LocationContext
  );
  const [saveTrack] = useSaveTrack();

  const { name, recording, locations } = state;

  return (
    <>
      <Spacer>
        <Input
          placeholder='Enter track name'
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {!recording ? (
          <Button title='Start Recording' onPress={startRecording} />
        ) : (
          <Button
            title='Stop Recording'
            onPress={stopRecording}
            buttonStyle={{ backgroundColor: 'red' }}
          />
        )}
      </Spacer>
      {!recording && locations.length > 0 && (
        <Spacer>
          <Button title='Save Recording' onPress={saveTrack} />
        </Spacer>
      )}
    </>
  );
};

export default TrackForm;
