import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import CounterScreen from './screens/CounterScreen';

export default createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Counter: {
      screen: CounterScreen,
    },
  },
  {
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);


