import React, {Component } from "react";
 
import {
     
    Image, 
    StyleSheet,
    ImageBackground, 
    View,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Text

  } from 'react-native';
import colors from '../styles/colors';
 

 
class Auth extends Component{


    state = {
        errors: {},
        email: '',
        password: '',
        isLoading: false,
      }
  
    render(){

        return (
            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}
          >
                <ImageBackground source={require('../assets/img/climb.png')} style={styles.backgroundImage}>
                    <ImageBackground source={require('../assets/img/gradient.png')} style={styles.backgroundImage}>

                        <View style={styles.logoContainer}>
                            
                            <Image
                                source={require('../assets/img/logo.png')}
                                style={styles.logo}
                            />
                            
                        </View>

                        <View style={styles.formContainer}>
                            <TextInput
                                style={{height: 40}}
                                placeholder="Type here to translate!"
                                onChangeText={(text) => this.setState({text})}
                                />

                            <TextInput
                                style={{height: 40}}
                                placeholder="Type here to translate!"
                                onChangeText={(text) => this.setState({text})}
                                />

                        

                        </View>
                            
                    </ImageBackground>
                </ImageBackground>
            </KeyboardAvoidingView>
           
        );
    }
}


// const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
      },
    backgroundImage: {
        width: '100%',
        height: '100%',

    },
    transparentBg:{
        backgroundColor: "transparent",
        borderColor: "transparent",

    },
      logoContainer: {
        marginTop: -30,
        minHeight: 190,
        justifyContent: 'center',
        alignItems: 'center', 
      },
      linearGradient: {
        paddingTop: 90,
        paddingBottom: 40, 
        backgroundColor: colors.themeBackground,
      },
      formContainer: {
        height:  200,
        paddingHorizontal: 30,
        paddingTop: 60,
      },
      logo: {
        resizeMode: 'contain',
        height: 104,
      },
});



export default Auth ;
