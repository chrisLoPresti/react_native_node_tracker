import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as AuthProvider } from './src/context/AuthContext';
import {
  Account,
  Signin,
  Signup,
  TrackCreate,
  TrackDetail,
  TrackList
} from './src/screens';
import { setNavigator } from './src/utils/nagivationRef';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: Signup,
    Signin: Signin
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackList,
      TrackDetail: TrackDetail
    }),
    TrackCreate: TrackCreate,
    Account: Account
  })
});

const App = createAppContainer(switchNavigator);

export default () => (
  <AuthProvider>
    <App
      ref={navigator => {
        setNavigator(navigator);
      }}
    />
  </AuthProvider>
);
