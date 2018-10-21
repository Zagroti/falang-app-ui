import React, {Component} from 'react';
import { View , Text , TouchableOpacity , StyleSheet, Button} from 'react-native';
import SpeechAndroid from 'react-native-android-voice';
import Voice from 'react-native-voice'; 
import tts from 'react-native-android-speech'
// import Speech from 'react-native-speech';




class TestComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          recognized: '',
          started: '',
          results: [],
        };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
      }
    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
      }
    onSpeechStart(e) {
        this.setState({
          started: '√',
        });
      };
    onSpeechRecognized(e) {
        this.setState({
          recognized: '√',
        });
      };
    onSpeechResults(e) {
        this.setState({
          results: e.value,
        });
      }
    async _startRecognition(e) {
        this.setState({
          recognized: '',
          started: '',
          results: [],
        });
        try {
          await Voice.start('en-US');
        } catch (e) {
          console.error(e);
        }
      }
      

      onSpech(){

        tts.speak({
          text:'Hello mojtaba , How are you', // Mandatory
          pitch:1.5, // Optional Parameter to set the pitch of Speech,
          forceStop : false , //  Optional Parameter if true , it will stop TTS if it is already in process
          language : 'en', // Optional Paramenter Default is en you can provide any supported lang by TTS
          country : 'US' // Optional Paramenter Default is null, it provoques that system selects its default
      }).then(isSpeaking=>{
          //Success Callback
          console.log(isSpeaking);
      }).catch(error=>{
          //Errror Callback
          console.log(error)
      });
      }

    render() { 
        return ( 
<View>
        <Text style={styles.transcript}>
            Transcript
        </Text>
        {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
        )}
        <Button style={styles.transcript}
        onPress={this._startRecognition.bind(this)}
        title="Start"></Button>


        <TouchableOpacity onPress={this.onSpech.bind(this)}>
          <Text>Spech Spech</Text>
        </TouchableOpacity>
      </View>
         );
    }
}
 

const styles = StyleSheet.create({
    transcript: {
      textAlign: 'center',
      color: '#B0171F',
      marginBottom: 1,
      top: '400%',
    },
  });
export default TestComponent;