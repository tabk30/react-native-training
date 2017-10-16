import React from 'react';
import { View, ListView, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

// import dataNew from './demoData';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class ListViewFooter extends React.Component {
    listData = dataNew;
    
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(this.listData),
        };
    }

    loadMoreData() {
        for (i = 0; i < addData.length; i++) {
            console.log("[ListViewFooter:loadMoreData]", addData[i]);
            this.listData.push(dataNew[i]);
        }
        this.setState({
            dataSource: ds.cloneWithRows(this.listData),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    initialListSize={5}
                    pageSize={5}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => {
                        return (
                            <View style={stylesRow.container} >
                                <Image source={{ uri: data.picture.large }} style={stylesRow.photo} />
                                <Text style={stylesRow.text}>
                                    {`${data.name.first} ${data.name.last}`}
                                </Text>
                            </View >
                        );
                    }}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    renderFooter={() =>
                        <View style={stylesFooter.container}>
                            <TouchableOpacity style={stylesFooter.button} onPress={() => this.loadMoreData()}>
                                <Text style={stylesFooter.text}>Load More</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    }
});

const stylesRow = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

const stylesFooter = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderColor: '#8E8E8E',
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    text: {
        color: '#8E8E8E',
    }
});

export const dataNew = [
    {
        "name": {
            "title": "mr",
            "first": "aiden",
            "last": "lucas"
        },
        "email": "aiden.lucas@example.com",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/4.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
        }
    },
    {
        "name": {
            "title": "mr",
            "first": "mario",
            "last": "walters"
        },
        "email": "mario.walters@example.com",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/47.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
        }
    }];
const addData = [{
    "name": {
        "title": "mrs",
        "first": "catherine",
        "last": "moreno"
    },
    "email": "catherine.moreno@example.com",
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/55.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
    }
}];