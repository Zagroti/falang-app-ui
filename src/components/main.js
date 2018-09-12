import React, {Component } from "react";
import {  View ,   } from "react-native";
import { Container, Left, Button, Body, Title, Right, Header , Icon , Text} from 'native-base';

import colors from '../styles/colors';
 
import Notif from './main/notification';
import Progress from './main/progress';

class Main extends Component{



    render(){
        return (

            <Container>

            <Header style={{backgroundColor: colors.themeBackground , border:0}}>
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
            </Header>
            
            {/* Falang Notification Components  */}
            <Notif />
            
            {/* Progress bar  */}
            < Progress />

           

            </Container>
        )
    }
}


export default Main ;
