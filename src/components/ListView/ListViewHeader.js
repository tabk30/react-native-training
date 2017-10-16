import React from 'react';
import { View, ListView, StyleSheet, Text, Image, TextInput } from 'react-native';

import data from './demoData';

class ListViewHeader extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    onFilterViewList(text) {
        let searchText = text;
        this.setState({ searchText });

        let filteredData = this.filterNotes(searchText, data);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.setState({
            dataSource: ds.cloneWithRows(filteredData),
            rawData: this.data,
        });
    }

    filterNotes(searchText, dataList) {
        let text = searchText.toLowerCase();

        return dataList.filter((n) => {
            let note = (n.name.title + n.name.first + n.name.last).toLowerCase();
            return note.search(text) !== -1;
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
                    renderHeader={() =>
                        <View style={stylesHeader.container}>
                            <TextInput
                                style={stylesHeader.input}
                                placeholder="Search..."
                                onChangeText={(text) => this.onFilterViewList(text)}
                            />
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

const stylesHeader = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C1C1C1',
    },
    input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
});
export default ListViewHeader;