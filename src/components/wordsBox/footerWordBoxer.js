import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container}>

                <View style={styles.btnContainer}></View> 
                <View style={styles.btnContainer}></View> 
                <View style={styles.btnContainer}></View> 

            </View>
         );
    }
}
 

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor: colors.blue,
    },
    btnContainer:{
        flex:1,
        backgroundColor:'#ccc',
        borderWidth: 1,
        borderColor: '#333',

    }
})
export default Footer;