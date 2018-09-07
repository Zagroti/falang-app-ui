import React, {Component } from "react";
// import { Container, Left, Button, Body, Title, Right, Header , Icon} from 'native-base';

import {
     
    Image,
    Text,
    StyleSheet,
    ImageBackground

  } from 'react-native';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class Auth extends Component{


  
    render(){

      
        const resizeMode = 'center';
        const text = 'This is some text inlaid in an <Image />';

        return (

        <ImageBackground source={require('../assets/img/climb.png')} style={{width: '100%', height: '100%'}}>
            <Text>Inside</Text>
        </ImageBackground>

           
        );
    }
}



const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});



export default Auth ;
