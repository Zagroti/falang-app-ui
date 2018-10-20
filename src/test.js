import React, {Component} from 'react';
import { View , Text , TouchableOpacity} from 'react-native';
import SpeechAndroid from 'react-native-android-voice';




class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



     _buttonClick = async () => {
        console.log("spech start at")
        var spokenText = await SpeechAndroid.startSpeech("Speak your name", SpeechAndroid.ENGLISH);
        ToastAndroid.show(spokenText , ToastAndroid.LONG);
        
       
        console.log("spech run at")
    }



    render() { 
        return ( 

            <View>
                <TouchableOpacity onPress={this._buttonClick.bind(this)}>
                     <Text >Hello world</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
export default TestComponent;