import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container}>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                    </TouchableOpacity>
                    <Text>No!</Text>
                </View> 
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnSpech}>
                    </TouchableOpacity>
                </View> 

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                    </TouchableOpacity>
                    <Text>Yes</Text>
                </View> 

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
        alignContent:'center',
        alignItems:'center',
        justifyContent: 'center',


    },
    btn:{ 
        height:50,
        width:50,
        backgroundColor:colors.white,
        borderRadius:30,

    },
    btnSpech:{ 
        height:80,
        width:80,
        backgroundColor:colors.silver,
        borderRadius:60,

    }

})
export default Footer;