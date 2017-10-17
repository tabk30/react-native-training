import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

class ImageDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>                
                <Image 
                    style={{ width: 50, height: 50 }}
                    source={require(data_source)}/> 
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: 
                        'http://www.ecreative.pl/blog/wp-content/uploads/2015/03/react2-1024x399.png' }}
                />
                <Image
                    style={{ width: 66, height: 58 }}
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
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
});

export default ImageDemo;