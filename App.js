/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {StackNVDemo} from "./src/components/Navigation/StackNavigationDemo";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StackNVDemo />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  }
});
