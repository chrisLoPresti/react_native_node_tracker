import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } = useContext(
    LocationContext
  );

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
            style={{ backgroundColor: 'red', color: 'white' }}
          />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
