/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Splash from './Splash';
import Login from './src/components/Login/Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Remote debugger'];
  }

  appCallback(){
    console.log("[App:appCallback]");
  }

  render() {
    return (
      <View>
        <Text> Init component</Text>
        <FistComponent inputData={"input data"} callbackToParent={this.appCallback}/>
      </View>
    );
  }
}

export class FistComponent extends Component {
  constructor(props) {
    super(props);
    console.log("[FistComponent:constructor]", props.inputData);
  }


  componentWillMount() {
    console.log("[FistComponent:componetWillMount]");
  }
  render() {
    console.log("[FistComponent:render]");
    return (
      <View>
        <Text> Toi ten la pham tuan anh</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onChange.bind(this)}
        >
          <Text style={styles.buttonText}> ONCHANGE </Text>
        </TouchableOpacity>
      </View>
    );
  }

  onChange() {
    console.log("[FistComponent:onChange]");
    this.setState({ newdata: "new data" });
    this.props.callbackToParent();
  }

  componentDidMount() {
    console.log("[FistComponent:componetDidMount]");
  }

  shouldComponentUpdate() {
    console.log("[FistComponent:shouldComponentUpdate]");
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log("[FistComponent:componentWillReceiveProps]");
  }

  componentWillUpdate() {
    console.log("[FistComponent:componentWillUpdate]");
  }

  componentDidUpdate() {
    console.log("[FistComponent:componentDidUpdate]");
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#34495e",
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF"
  }
});
