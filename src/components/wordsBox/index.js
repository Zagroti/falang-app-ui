//
// word boxser page is after pres start button 
//

import React, {Component} from 'react';
import { View , Text, StyleSheet } from 'react-native';

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

            <View style={styles.container}>

                <Header />

                <WordBoxer />

                <FooterWordBoxer />
             
            </View>
         );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,

    }
})
 
export default Index;