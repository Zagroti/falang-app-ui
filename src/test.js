import React, {Component} from 'react';
import { View , Text } from 'react-native';


class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View>
                <Text>Hello world</Text>
            </View>
         );
    }
}
 
export default TestComponent;