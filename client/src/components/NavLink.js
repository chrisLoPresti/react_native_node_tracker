import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { navigate } from '../utils/nagivationRef';

const NavLink = ({ text, to, params, callback }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate(to, params, callback)}>
        <Spacer>
          <Text style={styles.NavLink}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  NavLink: {
    color: 'blue',
    alignSelf: 'center'
  }
});

export default NavLink;
