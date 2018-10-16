import React, { Component } from 'react';
import { View , Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import colors from './styles/colors';
import Footer from './components/wordsBox/footerWordBoxer';


class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0  }
        this.execChildFunct=this.execChildFunct.bind(this)

        this.spinValue = new Animated.Value(0)

    }
  

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,   
            }
            ).start()
                 
                  
          
      }

     

      execChildFunct() {
        this.spin();
        }

    render() { 

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
          })



        return ( 

            <View style={styles.container}> 

               <Animated.View style={{
                   flex:1,
                   backgroundColor: colors.white,
                   borderRadius: 10,
                   alignItems: 'center',
                   justifyContent:'center',
                   transform: [{rotateY: spin }] 

               }} >
                <TouchableOpacity onClick={this.handleClick}  style={{backgroundColor:colors.blue, paddingHorizontal:50, paddingVertical:10}} >
                        <Text>Play </Text>
                    </TouchableOpacity>

                    <Footer   onPress = {this.execChildFunct.bind(this)} />
               </Animated.View>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.red,
        padding: 20

    },
    box:{
        flex:1,
        backgroundColor:colors.white,
        alignItems: 'center',
        justifyContent:'center',
        transform: [{perspective: 50 }]

    }
})

 
export default TestComponent;