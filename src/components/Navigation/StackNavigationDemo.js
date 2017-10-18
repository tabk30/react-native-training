/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { StackNavigator, Navigator } from 'react-navigation';

export class HomeScreeen extends Component {
    constructor(props) {
        super(props);
    }

    goToAboutPage() {

        this.props.navigation.navigate('AbourScreen', { name: "Jo" });

    }

    render() {
        return (
            <View style={styles.containerHome}>
                <Text> Home page </Text>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.goToAboutPage()}
                >
                    <Text style={styles.buttonText}> Go To About Page </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export class AbourScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    backScreen() {

        this.props.navigation.goBack();

    }

    componentWillMount() {
        console.log("[this.props.navigation.state.params]", this.props.navigation.state.params);
        var newName = this.props.navigation.state.params ? this.props.navigation.state.params.name : "<undefined>";
        this.setState({ name: newName });
    }

    render() {

        return (
            <View style={styles.containerAbout}>
                <Text> About page </Text>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.backScreen()}
                >
                    <Text style={styles.buttonText}> Go Back </Text>

                </TouchableOpacity>

                <Text>About page: {this.state.name}</Text>
            </View>
        );
    }
}

export class SettingScreen extends Component {
    constructor(props) {
        super(props);
    }

    backScreen() {

        this.props.navigation.goBack();

    }

    render() {
        return (
            <View style={styles.containerAbout}>
                <Text> Setting page </Text>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.backScreen()}
                >
                    <Text style={styles.buttonText}> Go Back </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export const StackNVDemo = StackNavigator({
    HomeScreeen: {
        screen: HomeScreeen,
        navigationOptions: {
            title: 'Home Screeen',
        },
    },
    AbourScreen: {
        screen: AbourScreen,
        path: 'AbourScreen/:name',
        navigationOptions: ({ navigation }) => ({
            title: `About Screen`,
        })
    },
    SettingScreen: {
        screen: SettingScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Setting Screen`,
        })
    }
});

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 20
    },
    containerAbout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        marginTop: 20
    },
    buttonContainer: {
        backgroundColor: "#34495e",
        paddingVertical: 15,
        paddingHorizontal: 10
    }
});

