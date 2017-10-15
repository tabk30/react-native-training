import React, { Component } from 'react';

import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Button } from 'react-native';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            movieList: {}
        };
    }

    getMoviesFromApiAsync() {
        console.log("[LoginForm:getMoviesFromApiAsync]");
        return fetch('http://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("[LoginForm:getMoviesFromApiAsync] responseJson.movies", responseJson.movies);
            this.returnData(responseJson.movies);
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
    }

    returnData(movies){

        this.props.onChange(movies);
    }

    onLogin() {
        console.log("[LoginForm:onLogin]", this.state);
        // this.getMoviesFromApiAsync();
    }

    onPressLearnMore(){
        console.log("[LoginForm:onPressLearnMore]", this.state);
    }

    render() {
        return (
            <View style={style.wrapper}>
                <TextInput
                    placeholder="username"
                    returnKeyType="next"
                    style={style.input}
                    value={this.state.username}
                    onChangeText={(text) => this.setUserData({ username: text })} />
                <TextInput
                    placeholder="passwpord"
                    returnKeyType="go"
                    secureTextEntry
                    style={style.input}
                    value={this.state.password} />

                <TouchableOpacity
                    style={style.buttonContainer}
                    onPress={this.onLogin.bind(this)}
                >
                    <Text style={style.buttonText}> LOGIN </Text>
                </TouchableOpacity>

                <Button
                onPress={this.onPressLearnMore}
                title="Learn More"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

    


}

const style = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10
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