import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Alert, TextInput } from 'react-native';

export default class FunctionDemo extends Component {
    textInputTemp = "";
    constructor(props) {
        super(props);
        this.textInputTemp = "dasdasdasd";
        this.setState.bind(this);
    }

    _onPressButton() {
        console.log("[FunctionDemo:_onPressButton]");
        this.callOtherFuncton();
        this.setState({ textInputDemo: "dasdsa" });
    }

    callOtherFuncton() {
        console.log("[FunctionDemo:callOtherFuncton]");
    }

    onChangeText(text) {
        console.log("[FunctionDemo:onChangeText]", text);
        this.setState({ textInputDemo: text });
    }

    onEndEditing(event) {
        console.log("[FunctionDemo:onEndEditing]", event.nativeEvent.text);
        this.setState({ textInputDemo: event.nativeEvent.text });
    }
    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this._onPressButton('foo')} underlayColor="red" activeOpacity={0.1} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TextInput
                    ref="2"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                    onChangeText={(text) => { this.onChangeText(text) }}
                    onEndEditing={(event) => { this.onEndEditing(event) }}
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})


