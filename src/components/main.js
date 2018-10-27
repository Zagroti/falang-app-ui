import React, {Component } from "react";
import {  View , StyleSheet , ImageBackground  } from "react-native";
import { Container, Left, Button, Body, Title, Right, Header , Icon} from 'native-base';

import colors from '../styles/colors';
 
import Notif from './main/notification';
import Progress from './main/progress';
import Footer from './main/footer';

class Main extends Component{



    CallWordBox(){
        this.props.navigation.navigate('Index');

    }

    _callNotification(){
        this.props.navigation.navigate('ProIndex');

    }


    render(){
        return (

            <ImageBackground source={require('../assets/img/silver-bg.png')} style={styles.backgroundImage} >

                   

                        {/* <Header style={{backgroundColor: colors.themeBackground , border:0}}>
                            <Left>
                            <Title>فالنگ</Title>
                            </Left>
                            <Body> 
                            </Body>
                                <Right>
                                    <Button transparent>
                                        <Icon name='menu'/>
                                    </Button>
                                </Right>
                        </Header> */}

                        {/* Falang Notification Components  */}
                        <Notif onPress={this._callNotification.bind(this)} />

                        <View>

                                {/* Progress bar  A */}
                                < Progress  level='A' size="40%"/>

                                {/* Progress bar B */}
                                < Progress  level='B' size="50%" />

                                {/* Progress bar C */}
                                < Progress  level='C' size="80%" />

                                {/* Progress bar D */}
                                < Progress  level='D' size="20%" />
                        </View>

                      <Footer onPress = {this.CallWordBox.bind(this)} />  

                        

                    

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white, 


        

    },
})


export default Main ;


 
