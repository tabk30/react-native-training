import React from 'react';
import { View, ListView, StyleSheet, Text, Image } from 'react-native';

import data from './demoData';

class ListViewImage extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }
    render() {
        return (
            <ListView
                style={styles.container}
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
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
});

export default ListViewImage;

export class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={stylesRow.container} >
                <Image source={{ uri: this.rowData.props.picture.large }} style={stylesRow.photo} />
                <Text style={stylesRow.text}>
                    {`${this.props.rowData.name.first} ${this.props.rowData.name.last}`}
                </Text>
            </View >
        );
    }
}

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