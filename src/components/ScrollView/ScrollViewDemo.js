import React from 'react';
import { View, ListView, StyleSheet, Text, ScrollView } from 'react-native';

class ScrollViewDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView style={styles.container}　keyboardDismissMode={'on-drag'} horizontal={true}>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
});

export default ScrollViewDemo;