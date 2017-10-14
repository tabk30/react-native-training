import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ListView } from 'react-native'

import LoginForm from './LoginForm';

export default class Login extends Component {

    loginText = "Login";
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            movies: this.ds.cloneWithRows(['row 1', 'row 2']),
        };

    }

    onChange(data) {
        console.log('Movie list !', data);
        let listMovieArray = [];
        for (let i = 0; i < data.length; i++) {
            let temp = data[i];
            console.log('Movie list temp !', temp);
            listMovieArray.push(temp.title);
        }
        console.log('Movie list listMovieArray !', listMovieArray);
        this.setState({ movies: this.ds.cloneWithRows(listMovieArray) });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={style.wrapper}>
                <View style={style.logoContainer}>
                    <ListView
                        dataSource={this.state.movies}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
                </View>

                <View style={style.logoContainer}>
                    <Image style={style.logo} source={require('../../images/app-icon.png')} />
                    <Text style={style.title}> My App </Text>
                </View>
                <View style={style.formContainter}>
                    <LoginForm onChange={this.onChange.bind(this)} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1abc9c'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    logo: {
        height: 100,
        width: 100
    },
    title: {
        color: "white",
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        opacity: 0.8
    },
    formContainter: {

    }
});