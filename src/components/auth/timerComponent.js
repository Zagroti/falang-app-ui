import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from '../../styles/normalizeText';

class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container}>
                
                <View >
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerNumber}>ارسال مجدد</Text>
                        <Icon name="refresh" size={normalize(18)} color={colors.black} />
                    </View>
                    <View style={styles.timerClock}><Text >02 : 44</Text></View>

                </View>

            </View>
         );
    }
}
 


const styles = StyleSheet.create({

    container:{
            paddingHorizontal: 30,
            backgroundColor: 'transparent',

    },
    timerContainer:{
        backgroundColor: colors.white,
        borderRadius: 30,
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center', 
        width: '80%',
        marginLeft: '20%',
        flexDirection:'row',
        paddingRight: 10,

    },
    timerClock:{
        position: 'absolute',
        backgroundColor: colors.red,
        width: '50%',
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerNumber:{
        paddingRight:20,

    },
})

export default TimerComponent;