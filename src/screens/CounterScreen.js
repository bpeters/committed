import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';

import { Colors, HeaderStyles } from '../constants';

const { width, height } = Dimensions.get('window');

class CounterScreen extends Component {

  static navigationOptions = (props) => {
    return {
      title: '',
      headerStyle: HeaderStyles.header,
      headerTitleStyle: HeaderStyles.headerText,
      headerLeft: null,
      headerRight: null,
    };
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.slide}>
        <Text
          style={styles.counter}
        >
          {this.props.user.counter}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  counter: {
    fontFamily: 'cardo-bold',
    fontSize: 56,
    color: Colors.white,
    marginBottom: 40,
  },
});

const bindStore = (state) => {
  return {
    user: state.user,
  };
};

const bindActions = dispatch => ({
  commit: (message, date, navigation) => dispatch(userActions.commit(message, date, navigation)),
});

export default connect(bindStore, bindActions)(CounterScreen);
