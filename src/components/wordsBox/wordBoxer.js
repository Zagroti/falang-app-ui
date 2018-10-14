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

                <View style={styles.up}>
                    <View style={styles.wordSlider}>

                    </View>
                </View>

                <View style={styles.down}>
                    <View style={styles.wordAnswer}>

                    </View>
                </View>

            </View>
         );
    }
}
 

const styles = StyleSheet.create({

    container:{
        flex:5,
        backgroundColor: colors.black,
    
    },
    up:{
        flex:1,
        backgroundColor:colors. white,
        padding: 10,


    },
    down:{
        flex:2,
        backgroundColor:colors. black,
        padding: 10,
    },
    wordSlider:{
        flex:1,
        backgroundColor: colors.red,
        borderRadius: 10,

    },
    wordAnswer:{
        flex:1,
        backgroundColor: colors.white,
        borderRadius: 10,
    }
})
export default WordBoxer;