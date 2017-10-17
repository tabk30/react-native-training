import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class CameraCaptureDemo extends React.Component {

    state = {
        avatarSource: null,
        videoSource: null
    };

    selectPhotoTapped() {


        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            cameraType: "back",
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            //Xử lý responese
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
                    {this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                        <Image style={styles.avatar} source={this.state.avatarSource} />
                    }
                </View>

                <TouchableOpacity style={styles.captureButton} onPress={this.selectPhotoTapped.bind(this)}>
                    <Text style={styles.captureButtonText}> Chụp Ảnh </Text>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        // borderRadius: 75,
        width: 350,
        height: 350
    },
    captureButton: {
        backgroundColor: "#34495e",
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    captureButtonText: {
        color: "#FFF"
    }
});