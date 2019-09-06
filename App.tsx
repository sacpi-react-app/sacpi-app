import React, { Component } from 'react';
import { isSignedIn } from './src/navigation/auth';
import AppContainer from './src/navigation/navigation';
import { View, StatusBar, StyleSheet } from 'react-native';

export default class App extends Component {

  state = {
    signedIn: false,
    checkedSignIn: false
  };

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});