import React, { Component } from 'react';
import {View , Text , StyleSheet , Platform } from 'react-native'; 
import colors from '../../styles/colors';
import { H1, } from '../../typography';
import normalize from '../../styles/normalizeText';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    jewelStyle = function(size) {
         
        return { 
            padding:5,
            width:size,
            height:30, 
            right:0,
            position: 'absolute',
            marginTop:10,
            borderRadius:20,
            backgroundColor: colors.gold,
        }
        
      }


    render() { 

      

        return ( 

            <View style={styles.container}>
               
               <View style={styles.barContainer} >
                    <View style={this.jewelStyle(this.props.size)} ></View>
               </View>
               <View style={styles.circle} >
                    <Text style={styles.h1}>{this.props.level}</Text>
               </View>

               <View style={styles.circlePrsent}>
                    <Text style={styles.prcentNumber}>{this.props.size}</Text>
               </View>

            </View>
         );
    }
}
 
export default Progress;




const styles = StyleSheet.create({

container:{
    backgroundColor: 'transparent', 
    height: 90,
    flexDirection: 'row', 
    paddingVertical: 10,
    elevation: 3,
    padding:20,
    marginBottom: 10,

},
barContainer:{ 
    marginTop: 10,
    backgroundColor: colors.blue,
    padding: 10,
    width: '100%',
    height:50,
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
    margin: 5,
    elevation: 3,
},
h1:{

    height:'100%',
    color: colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',

},
 circlePrsent:{
  
    backgroundColor: colors.white,
    width:40,
    height:40,
    borderRadius:100,
    left:25,
    position: 'absolute',
    alignSelf:'center',
    elevation: 3,
 },
 prcentNumber:{ 
    textAlign:'center',
    alignSelf:'center',
    justifyContent:'center',
    paddingTop: 12,
    color: colors.blue,
    fontSize: Platform.OS === 'ios' ? normalize(10) : normalize(12),


 },

});