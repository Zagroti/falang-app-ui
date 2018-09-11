import React, {Component } from "react";
import {
    Image, 
    StyleSheet,
    ImageBackground, 
    View,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Text, 
    ActivityIndicator,

  } from 'react-native'; 
  import Button from '../touchable/button';
  import TextGroup from '../textgroup/text-field-group';
  import colors from '../../styles/colors';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    onPressSending = async () => {
        this.props.navigation.navigate('Activity'); 
    }
    render() { 

        const { errors, isLoading } = this.state


        return ( 

            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}
          >
                <ImageBackground source={require('../../assets/img/onboarding1.png')} style={styles.backgroundImage}>

                       <View style={styles.maincontainer}>
                            <View style={styles.logoContainer}>
                                    
                                    <Image
                                        source={require('../../assets/img/logo.png')}
                                        style={styles.logo}
                                    />
                                    
                                </View>

                                <View style={styles.formContainer}>
                                    <TextGroup 
                                    label="تلفن همراه"
                                    placeholder="+98 912 345 6789" />
                                </View>
                            
                                <View style={styles.formContainer}>
                    
                                        <View style={styles.buttonContainer}>
                                            <Button onPress={this.onPressSending}>
                                                <View style={styles.buttonLogin}>
                                                {isLoading ? (
                                                    <ActivityIndicator color="white" />
                                                ) : (
                                                    <Text style={styles.buttonTextLogin}>ارسال</Text>
                                                )}
                                                </View>
                                            </Button>
                                        </View>  

                                </View>

                       </View> 
                </ImageBackground>
            </KeyboardAvoidingView>
         );
    }
}
 


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
    
      },
    maincontainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        marginTop: 30,
        minHeight: 320,
        justifyContent: 'center',
        alignItems: 'center', 
      },
      formContainer: {
        paddingHorizontal: 30,
        paddingBottom: 100,
      },
      logo: {
        resizeMode: 'contain',
        height: 104,
      },
      buttonContainer:{
          padding:10,
          margin: 5,
      },
      buttonContainer: { marginTop: 20 },
      buttonRegister: {
        height:60,
        backgroundColor: colors.transparentBg,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.white,
        borderWidth: 2,

      },
      buttonLogin: {
        height:60,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      buttonText: {
        fontSize:20,
        color: colors.white,
        fontFamily: 'IRANSans_Medium',
      },
      buttonTextLogin: {
        fontSize:20,
        color: colors.red,
        fontFamily: 'IRANSans',
      },


});



export default Login;