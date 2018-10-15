

import React, { Component } from 'react';
import {View, Text, StyleSheet , TouchableOpacity , ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';
import normalize from '../../styles/normalizeText';


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
                       <View style={styles.left}>
                            <Icon name="ios-arrow-back" size={normalize(20)} color={colors.shadow} />
                       </View>

                       <View style={styles.center}>
                            <Text style={styles.txtWord}>Abonden</Text>
                        </View>

                       <View style={styles.right}>
                            <Icon name="ios-arrow-forward" size={normalize(20)} color={colors.shadow} />
                       </View>
                    </View>
                </View>

                <View style={styles.down}>
                    <View style={styles.wordAnswer}>

                        <TouchableOpacity style={styles.btnView}>
                            <Icons name="eye" size={normalize(40)} color={colors.themeBackground} />
                            <Text>View</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
         );
    }
}
 

const styles = StyleSheet.create({

    container:{
        flex:5, 
    
    },
    up:{
        flex:1, 
        padding: 10,
      
        


    },
    down:{
        flex:2, 
        padding: 10,
    },
    wordSlider:{
        flex:1, 
        borderRadius: 10, 
        flexDirection:'row',
        borderColor: colors.silver,
        borderWidth: 1,
        backgroundColor: 'rgba(197, 205, 195, 0.1)',


    },
    wordAnswer:{
        flex:1,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',

    },
    btnView:{
        height:150,
        width: 150,
        borderRadius:90,
        backgroundColor:colors.silver,
        borderColor: colors.red,
        borderWidth: 10,
        alignItems: 'center',
        justifyContent:'center',
        elevation:5



    },
    left:{
        flex:1,
        backgroundColor: colors.silver,
        padding: 10,
        alignItems: 'center',
        justifyContent:'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 70,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 70,

    },
    center:{
        flex:8, 
        padding: 10,
        alignItems: 'center',
        justifyContent:'center',
    },
    right:{
        flex:1,
        backgroundColor: colors.silver,
        padding: 10,
        alignItems: 'center',
        justifyContent:'center',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 10,
    },
    txtWord:{
        fontSize: normalize(30),
        color: colors.black,
        
    }
})
export default WordBoxer;