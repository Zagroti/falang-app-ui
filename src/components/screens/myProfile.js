import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';

//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'
import TextInput from '../../components/textgroup/text-input';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text>My Profile is Hear</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.card}>
                            <TextInput 
                                            label="نام و نام فامیل"
                                            placeholder="امید آرمانی"
                                            style={styles.txtInput}
                                            maxLength={30}
                                            keyboardType={'numeric'}
                                            />
                                            
                        </View>
                        <View style={styles.card}>
                            <TextInput 
                                            label="تلفن همراه"
                                            placeholder="+98 912 345 6789"
                                            style={styles.txtInput}
                                            maxLength={11}
                                            keyboardType={'numeric'}
                                            />
                                            
                        </View>
                        <View style={styles.card}>
                            <TextInput 
                                            label="پست الکترونیک"
                                            placeholder="nfo@example.com"
                                            style={styles.txtInput}
                                            maxLength={40}
                                            keyboardType={'numeric'}
                                            />
                                            
                        </View>
                        <View style={styles.card}>
                            <TextInput 
                                            label="استان"
                                            placeholder="تهران"
                                            style={styles.txtInput}
                                            maxLength={20}
                                            keyboardType={'numeric'}
                                            />
                                            
                        </View>

                </View> 
                <View style={styles.btnContainer}></View>
            </View>
         );
    }
}
 

const styles= StyleSheet.create({
    container:{
        flex:1,

    },
    Header:{
        flex:2,
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    form:{
        flex:4,
        backgroundColor:colors.silver,
        padding:10,


    },
    txtInput:{
        width:350, 
        color:colors.black 
      },    
      card:{
        flex:1, 
        alignContent:'center',
        alignItems:'center',
        justifyContent: 'center',
    },
    btnContainer:{
        backgroundColor:colors.black,
        flex:1,
    }
})
export default MyProfile;