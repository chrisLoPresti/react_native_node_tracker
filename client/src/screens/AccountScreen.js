import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { SignOut } = useContext(AuthContext);
  return (
    <>
      <Spacer>
        <Button title='Sign Out' onPress={SignOut} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
