import React, {Component} from 'react';
import { View , Text } from 'react-native';

import Header from '../headers/headersWordBox';
import WordBoxer from './wordBoxer';



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View>
                <Header />

                <WordBoxer />
                 
            
                <Text>Words Box</Text>
            </View>
         );
    }
}
 
export default Index;