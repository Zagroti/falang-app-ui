import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';


class WordBoxer extends Component {
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
        flex:5,
        backgroundColor: colors.black,
    
    }
})
export default WordBoxer;