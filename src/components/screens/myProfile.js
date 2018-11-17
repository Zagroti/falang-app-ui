import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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


    _callSave(){
        alert("Save it!")
    }
    render() {
        const { errors, isLoading } = this.state

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
                <View style={styles.btnContainer}>
                
                        <TouchableOpacity onPress={this._callSave}>
                            <View style={styles.btn}>
                            {isLoading ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text style={styles.buttonText}>ذخیره</Text>
                                
                            )}
                            </View>
                        </TouchableOpacity>
                </View>
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
        flex:1, 
        justifyContent: 'center',
    },
    btn: { 
        backgroundColor: colors.blue,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:12,
        marginHorizontal:15,
       

      },
      buttonText: {
        fontSize:16,
        color: colors.white,
        fontFamily: 'IRANSans_Medium',
      },

})
export default MyProfile;