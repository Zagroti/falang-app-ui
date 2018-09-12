import React, { Component } from 'react';
import  { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import colors  from '../../styles/colors';
import normalize   from '../../styles/normalizeText';



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container}>
 
                <View style={styles.partOne}></View>
                <TouchableOpacity style={styles.startContainer}>
                    <Text style={styles.startText}>START</Text>
                </TouchableOpacity>
            </View>
         );
    }
}


const styles = StyleSheet.create({

    container:{
        position: 'absolute',
        backgroundColor: 'transparent',
        height: 250,
        bottom : 0,
        width: '100%',  

    },
   
    partOne:{
        backgroundColor: colors.silver,
        position: 'absolute', 
        padding: 10,
        height: 150,
        bottom : 0,
        width: '100%',  

    },
    startContainer:{ 
        width:200,
        height:200,
        backgroundColor:colors.red,
        justifyContent: 'center', 
        alignSelf: 'center' ,
        alignItems: 'center',
        borderRadius: 300,
        borderWidth: 12,
        borderColor: colors.white,
        
    },
    startText:{
        color: colors.white,
        fontSize: normalize(22),
        fontWeight: 'bold',
        

    }

})
 
export default Footer;