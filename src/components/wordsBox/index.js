//
// word boxser page is after pres start button 
//

import React, {Component} from 'react';
import { View , Text, StyleSheet, ImageBackground  } from 'react-native';

import Header from '../headers/headersWordBox';
import WordBoxer from './wordBoxer';
import FooterWordBoxer from './footerWordBoxer';



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <ImageBackground source={require('../../assets/img/silver-bg.png')} style={styles.container}>

                <Header />

                <WordBoxer />

                <FooterWordBoxer />
             
            </ImageBackground>
         );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,

    }
})
 
export default Index;