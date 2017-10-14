import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ListView } from 'react-native'


export default class TextDemo extends Component {
    textContent = "Đây là text demo từ biến data";
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <View style={style.wrapper}>

                <Text> {this.textContent} </Text>
                <Text> Nested text </Text>
                <Text style={{ fontWeight: 'bold' }}>
                    I am bold
                        </Text>
                {/* <Text style={{ color: 'red' }}>
                            and red
                    </Text>
                        <Text style={{ color: 'red' }}>
                            and red
                    </Text>
                    </Text>
                    <Text>
                        <Text>First part and </Text>
                        <Text>second part</Text>
                    </Text>

                    <View>
                        <Text>First part and </Text>
                        <Text>second part</Text>
                    </View> */}




                <Text style={{ fontSize: 23 }}>
                    Size 23
                    </Text>
                <Text style={{ fontSize: 8 }}>
                    Size 8
                    </Text>



                <Text style={{ fontFamily: 'Cochin' }}>
                    Cochin
        </Text>
                <Text style={{ fontFamily: 'Cochin', fontWeight: 'bold' }}>
                    Cochin bold
        </Text>
                <Text style={{ fontFamily: 'Helvetica' }}>
                    Helvetica
        </Text>
                <Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
                    Helvetica bold
        </Text>
                <Text style={{ fontFamily: 'Verdana' }}>
                    Verdana
        </Text>
                <Text style={{ fontFamily: 'Verdana', fontWeight: 'bold' }}>
                    Verdana bold
        </Text>



                <Text style={{ fontSize: 20, fontWeight: '100' }}>
                    Move fast and be ultralight
        </Text>
                <Text style={{ fontSize: 20, fontWeight: '200' }}>
                    Move fast and be light
        </Text>
                <Text style={{ fontSize: 20, fontWeight: 'normal' }}>
                    Move fast and be normal
        </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Move fast and be bold
        </Text>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>
                    Move fast and be ultrabold
        </Text>

                <Text style={{ fontStyle: 'normal' }}>
                    Normal text
      </Text>
                <Text style={{ fontStyle: 'italic' }}>
                    Italic text
      </Text>

                

{/*                 
        <Text>
          auto (default) - english LTR
        </Text>
        <Text>
          أحب اللغة العربية auto (default) - arabic RTL
        </Text>
        <Text style={{textAlign: 'left'}}>
          left left left left left left left left left left left left left left left left left left left left left left
        </Text>
        <Text style={{textAlign: 'center'}}>
          center center center center center center center center center center center
        </Text>
        <Text style={{textAlign: 'right'}}>
          right right right right right right right right right right right right right
        </Text>
        <Text style={{textAlign: 'justify'}}>
          justify: this text component{"'"}s contents are laid out with "textAlign: justify"
          and as you can see all of the lines except the last one span the
          available width of the parent container.
        </Text> */}
                    
                

        <Text style={{lineHeight: 35}}>
          A lot of space between the lines of this long passage that should
          wrap once.
        </Text>

        <Text numberOfLines={1}>
          Maximum of one line, no matter how much I write here. If I keep writing, it{"'"}ll just truncate after one line.
        </Text> 


            </View>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20
    }
});