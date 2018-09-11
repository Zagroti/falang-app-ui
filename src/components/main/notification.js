import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//
//
import colors from '../../styles/colors';
import normalize from '../../styles/normalizeText';
import {H1, H2, HR} from '../../typography'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }

 

    render() { 



   


        return ( 

            <TouchableOpacity style={styles.container}>
                
             
                <View style={styles.leftSid}>
                    <View style={styles.btnLeft}>
                        <Icon name="notifications-active" size={normalize(20)} color={colors.red} />
                    </View>
                </View>
 
                <View style={styles.rightSid}>
                   
                    <H1>{"\n"}خود آموز هوشمند فالنگ</H1>
                    <H2>می خواهی کلمات جدید هر روز برات ارسال شود؟ </H2>
                     
                </View>
               
               
          
            </TouchableOpacity>
         );
    }
}
 


const styles = StyleSheet.create({

    container:{ 
        backgroundColor: '#f3f3f3',
        height: 90,
        flexDirection: 'row', 
        paddingVertical: 10,
            
    },
    rightSid:{  
        height:70,  
        paddingHorizontal: 10, 
        flexGrow: 1,

        justifyContent: 'center', 
         

    },
    leftSid:{
          
        height:70, 
        justifyContent: 'center',
        paddingHorizontal:10,
        

    },
    btnLeft:{
        backgroundColor:colors.white,
        borderRadius: 24,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd', 
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 1,
    },
    iconNotif:{
        backgroundColor: colors.gold,
        width:70,
        height:70,

    }

})

export default Notification;