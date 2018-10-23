import React , {Component} from 'react';
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native';



class PaymentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container }>
                <Text>Payment Page </Text>
            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})
 
export default PaymentComponent;
