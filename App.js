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
import TextDemo from './src/components/Text/TextDemo';
import TextInputDemo from './src/components/TextIput/TextInputDemo';
import ButtonDemo from './src/components/Button/Button';
import FunctionDemo  from './src/components/Function/FunctionDemo'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component {
  data = "Parent data";
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <FunctionDemo />
    );
  }
}

export class FistComponent extends Component {
  constructor(props) {
    super(props);
    console.log("[FistComponent:constructor]", this.props.firsData);
  }

  componentWillMount() {
    console.log("[FistComponent:componentWillMount]");
  }

  onChange() {
    console.log("[FistComponent:onChange]");
    this.setState({ newdata: "new data" });
    this.props.callbackChild("Child data");
  }

  shouldComponentUpdate() {
    console.log("[FistComponent:shouldComponentUpdate]");
    return true;
  }

  componentWillUpdate() {
    console.log("[FistComponent:componentWillUpdate]");
  }

  render() {
    console.log("[FistComponent:render]");
    return (
      <View>
        <Text> Đây là component đầu tiên  </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onChange.bind(this)}
        >
          <Text style={styles.buttonText}> ONCHANGE </Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    console.log("[FistComponent:componentDidMount]");
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
  },
  textTitle: {
    backgroundColor: "red",

    borderColor: "black",
    borderWidth: 2,
    flex: 1
  },

  wrapper: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column"
  },
  rowFeild: {
    flex: 1,
    flexDirection: "row",
  },
  rowFeildCell: {
    flex: 1,
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});
