import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
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
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
  TrackList,
  TrackDetail
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth,
  loginFlow: createStackNavigator({
    SignIn,
    SignUp
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreate,
    Account: Account
  })
});

const App = createAppContainer(switchNavigator);

export default () => (
  <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
);
