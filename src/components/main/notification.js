import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from '../../styles/normalizeText';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }

 

    render() { 



   


        return ( 

            <TouchableOpacity style={styles.container}>
                
             
                <View style={styles.leftSid}>
                    <View style={styles.btnLeft}></View>
                </View>
                <View style={styles.centerSid}>
                    <Text>wewewewewe</Text>
                    <Text>wewewewewe</Text>
                </View>
                <View style={styles.rightSid}></View>
               
               
          
            </TouchableOpacity>
         );
    }
}
 


const styles = StyleSheet.create({

    container:{ 
            backgroundColor: colors.red,
            height: 150,
            flexDirection: 'row'
            
    },
    rightSid:{
            backgroundColor:colors.gold,
            height:70,
            width: 50,

    },
    leftSid:{
        backgroundColor:colors.black,
        height:70,
        width: 50,

    },
    centerSid:{
        backgroundColor:colors.blue,
        height:70, 
        paddingHorizontal: 10,

    },
    btnLeft:{
        backgroundColor:colors.white,
        borderRadius: 20,
        padding: 10,

    },

})

export default Notification;