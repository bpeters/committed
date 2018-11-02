import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import * as userActions from '../actions/user';

import { Colors, HeaderStyles } from '../constants';

const { width, height } = Dimensions.get('window');

class WelcomeScreen extends Component {

  static navigationOptions = (props) => {
    return {
      title: '',
      headerStyle: HeaderStyles.header,
      headerTitleStyle: HeaderStyles.headerText,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      showPicker: false,
      message: '',
      date: '',
    };
  }

  togglePicker = () => {
    this.setState({
      showPicker: !this.state.showPicker,
    });
  }

  render() {
    return (
      <View style={styles.slide}>
        <View style={styles.top}>
        <Text style={styles.title}>
          Committed.
        </Text>
        <Text style={styles.text}>
          What is the one thing you want to commit to each day?
        </Text>
        <TextInput
          ref={(input) => { inputRef = input; }}
          style={styles.input}
          onChangeText={(message) => this.setState({message})}
          value={this.state.message}
          keyboardAppearance="dark"
          autoCorrect={true}
          autoCapitalize="none"
          placeholder="Enter commitment"
          placeholderTextColor={Colors.black80}
          underlineColorAndroid={Colors.black}
        />
        <Text style={styles.text}>
          What time would you like to be asked if you have done your one thing each day?
        </Text>
        <TouchableOpacity
          onPress={this.togglePicker}
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            {this.state.date || 'Choose Time'}
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          mode='time'
          titleIOS='Pick a time'
          isVisible={this.state.showPicker}
          onConfirm={(date) => {
            this.setState({
              date: moment(date).format('h:mm a'),
            });

            this.togglePicker();
          }}
          onCancel={this.togglePicker}
        />
        </View>
          <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => {
              this.props.commit(this.state.message, this.state.date, this.props.navigation);
            }}
            style={styles.done}
          >
            <Text
              style={styles.doneText}
            >
              Let's Go
            </Text>
          </TouchableOpacity>
        </View>
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
  top: {
    height: height - 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottom: {
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'cardo-bold',
    fontSize: 56,
    color: Colors.white,
    marginBottom: 40,
  },
  text: {
    fontFamily: 'cardo-regular',
    fontSize: 22,
    color: Colors.white,
    width: width - 80,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'cardo-regular',
    width: width - 80,
    height: 60,
    color: Colors.white,
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: Colors.black,
    marginBottom: 40,
    borderBottomColor: Colors.white,
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: Colors.white,
    width: width - 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'cardo-regular',
    fontSize: 22,
    color: Colors.black,
    textAlign: 'center',
  },
  done: {
    backgroundColor: Colors.white,
    width: width - 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  doneText: {
    fontFamily: 'cardo-regular',
    fontSize: 22,
    color: Colors.black,
    textAlign: 'center',
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

export default connect(bindStore, bindActions)(WelcomeScreen);
