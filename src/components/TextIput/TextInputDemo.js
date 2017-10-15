import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native'


export default class TextInputDemo extends Component {
    textContent = "Đây là TextInputDemo demo";
    constructor(props) {
        super(props);
        this.state = {
            text: "Lấn đầu nhập text"
        }

    }

    onchangeTextView(newText) {
        console.log("[TextInputDemo:onchangeTextView]", newText);
        this.setState({ text: newText });
    }

    focusNextField = (nextField) => {
        this.refs[nextField].focus();
    };


    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={style.wrapper}>
                <TextInput
                    ref="1"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                    placeholder="Sẽ mất khi input"
                    returnKeyType="next"
                    placeholderTextColor="gray"
                    onSubmitEditing={() => this.focusNextField('2')}
                />

                <TextInput
                    ref="2"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                    value={this.state.text}
                />

                <Text> {this.state.text} </Text>
            </KeyboardAvoidingView>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});