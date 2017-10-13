import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native'
export default class Splash extends Component {
    render() {
        return (
            <View style={style.wrapper}>
                <View style={style.titleWrapper}>
                    <Text style={style.title}> Helllo Pham Tuan Anh </Text>
                </View>
                <View>
                    <Text style={style.subtitle}> Powered by React Native </Text>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: '#3498db',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    }
});