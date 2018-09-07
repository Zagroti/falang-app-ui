import React, {Component } from "react";
import {  View , Text  } from "react-native";
import { Container, Left, Button, Body, Title, Right, Header , Icon} from 'native-base';





class Main extends Component{



    render(){
        return (

            <Container>

            <Header style={{backgroundColor: '#34495E', border:0}}>
                <Left>

                </Left>
                <Body>
                <Title>Github...</Title>
                </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Right>
            </Header>

            </Container>
        )
    }
}


export default Main ;
