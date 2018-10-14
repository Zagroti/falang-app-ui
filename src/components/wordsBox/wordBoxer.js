

import React, { Component } from 'react';
import {View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

                    </View>
                </View>

                <View style={styles.down}>
                    <View style={styles.wordAnswer}>

                        <TouchableOpacity style={styles.btnView}>
                            <Icon name="eye" size={normalize(40)} color={colors.black} />
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



    }
})
export default WordBoxer;