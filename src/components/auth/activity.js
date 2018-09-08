import React, { Component } from 'react';
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
  import normalize from '../../styles/normalizeText';
  import Button from '../touchable/button';
  import TextGroup from '../textgroup/text-field-group';
  import colors from '../../styles/colors';



class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const { errors, isLoading } = this.state
        const phoneNumber ="0912 213 1425";

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
                                <Text style={styles.phoneNumberStyle}>
                               کد فعال سازی به شماره  {phoneNumber} ارسال گردید.
                                </Text>
                        
                                <View >
                                    <TextGroup 
                                    label=" کد فعال سازی"
                                    placeholder="-  -  -  -" />
                                </View>
                                <Text style={styles.textActivity}>در صورتی که کد فعال سازی خود را اشتباه وارد نموده اید، بر روی ارسال مجدد کلیک کنید</Text>
                                <View style={styles.formContainerActivity}>
                                        <View style={styles.buttonContainer}>
                                        
                                            <Button onPress={this.loginPage}>
                                                <View style={styles.buttonAgin}>
                                                {isLoading ? (
                                                    <ActivityIndicator color="white" />
                                                ) : (
                                                    <Text style={styles.buttonTextAgin}>ارسال مجدد </Text>

                                                )}
                                                </View>
                                            </Button>
                                        </View>  

                                </View>
                            
                                <View style={styles.formContainer}>
                    
                                        <View style={styles.buttonContainer}>
                                            <Button onPress={this.loginPage}>
                                                <View style={styles.buttonLogin}>
                                                {isLoading ? (
                                                    <ActivityIndicator color="white" />
                                                ) : (
                                                    <Text style={styles.buttonTextLogin}>فعال کنید!</Text>
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
        paddingHorizontal: 30,
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
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'center', 
      },
      formContainer: { 
        paddingBottom: 100,  
      },
      formContainerActivity:{
        paddingHorizontal: 50, 
        
      },
      logo: {
        resizeMode: 'contain',
        height: 80,
        
      },
      buttonContainer:{
          padding:10,
          margin: 5,
      }, 
   
      buttonLogin: {
        height:60,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      buttonAgin: {
        height:50,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      buttonTextAgin:{
        fontSize: Platform.OS === 'ios' ? normalize(10) : normalize(12),
        color: colors.red,
        fontFamily: 'IRANSans_Medium',
        paddingHorizontal:10,
        
      },
      buttonText: {
        fontSize: Platform.OS === 'ios' ? normalize(18) : normalize(20),
        color: colors.white,
        fontFamily: 'IRANSans_Medium',
      },
      buttonTextLogin: {
        fontSize: Platform.OS === 'ios' ? normalize(18) : normalize(20),
        color: colors.red,
        fontFamily: 'IRANSans',
      },
      textActivity:{
          fontFamily:'IRANSans',
          fontSize: Platform.OS === 'ios' ? normalize(8) : normalize(10),
        },
      phoneNumberStyle:{
        fontFamily:'IRANSans',
        padding: 30,
        textAlign: 'center',
        fontSize: Platform.OS === 'ios' ? normalize(8) : normalize(10),


      },


});


export default Activity;