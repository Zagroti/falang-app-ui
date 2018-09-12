import React, { Component } from 'react';
import {View , Text , StyleSheet } from 'react-native'; 
import colors from '../../styles/colors';
import { H1, } from '../../typography'

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container}>
               
               <View style={styles.barContainer} ></View>
               <View style={styles.circle} >
                    <Text style={styles.h1}>A</Text>
               </View>

            </View>
         );
    }
}
 
export default Progress;




const styles = StyleSheet.create({

container:{
    backgroundColor: '#ccc', 
    height: 90,
    flexDirection: 'row', 
    paddingVertical: 10,
    elevation: 3,
    padding:20,

},
barContainer:{
    marginTop: 5,
    backgroundColor: colors.blue,
    padding: 10,
    width: '100%',
    height:60,
    borderRadius: 30,
},
circle:{
    position: 'absolute',
    backgroundColor: colors.blue,
    padding: 10,
    width: 80,
    height:80,
    borderRadius: 100,
    right:0,
    margin: 5
},
h1:{
    height:'100%',
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',

}


});