import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Font } from 'expo';

import Navigation from './navigation';
import configureStore from './store';
import { Colors } from './constants';

const { persistor, store } = configureStore();

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default class Root extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<View style={styles.loading} />}
          persistor={persistor}
          onBeforeLift={async () => {
            await Font.loadAsync({
              'cardo-bold': require('../assets/fonts/Cardo-Bold.ttf'),
              'cardo-italic': require('../assets/fonts/Cardo-Italic.ttf'),
              'cardo-regular': require('../assets/fonts/Cardo-Regular.ttf'),
            });

            console.log('We Have Lift Off!');
          }}
        >
          <StatusBar
            backgroundColor={Colors.black}
            barStyle="light-content"
            translucent={false}
          />
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}