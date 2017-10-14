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


    render() {
        return (
            <View style={style.wrapper}>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />

            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20}}
                placeholder="Sẽ mất khi input"
                placeholderTextColor="#000"
            />

            <Text> {this.state.text} </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});