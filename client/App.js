import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import {
  Account,
  SignIn,
  SignUp,
  TrackCreate,
  TrackDetail,
  TrackList,
  ResolveAuth
} from './src/screens';
import { setNavigator } from './src/utils/nagivationRef';

const switchNavigator = createSwitchNavigator({
  ResolveAuth,
  loginFlow: createStackNavigator({
    SignIn,
    SignUp
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList,
      TrackDetail
    }),
    TrackCreate: TrackCreate,
    Account: Account
  })
});

const App = createAppContainer(switchNavigator);

export default () => (
  <LocationProvider>
    <AuthProvider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  </LocationProvider>
);
