import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';


class HeaderWordBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container}>

            </View>
         );
    }
}
 

const styles = StyleSheet.create({

    container:{
        height:50,
        backgroundColor: colors.red,
    
    }
})
export default HeaderWordBox;