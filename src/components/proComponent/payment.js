import React , {Component} from 'react';
import { View , Text , StyleSheet , TouchableOpacity, ImageBackground , Image} from 'react-native';
import Header from '../headers/headersWordBox';
import colors from '../../styles/colors';



class PaymentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={styles.container }>

            <Header  title="خرید بسته خودآموز"/>
        
             <ImageBackground source={require('../../assets/img/victory.png')}       resizeMode="cover"  style={styles.backgroundImage}></ImageBackground>
              
                <View style={styles.card}>
                    <View style={styles.box}>
                    <View style={styles.imgLogo}>
                        <Image source={require('../../assets/img/irancell.png')} borderRadius={5}   resizeMode="contain" style={{  height:80, width:80, }} />
                    </View>

                        <Text>Sample</Text>
                        <Text>Sample WOrdl for buy</Text>

                        <TouchableOpacity style={[styles.btn, {backgroundColor:colors.blue}]}>
                            <Text>Buy</Text>
                        </TouchableOpacity>

                    </View>
                </View>
        
            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:colors.white,

    },
    backgroundImage:{
        flex:1, 
  
    },
    card:{
        flex:1,
        justifyContent:'space-around',

    },
    box:{
        backgroundColor:colors.silver,
        height:250,
        margin:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-around',
        
    },
    imgLogo:{ 
        borderRadius:10,  
        borderWidth:5,
        borderColor:'#ccc',
        marginTop:20,

    },
    btn:{
        height:50,
        marginHorizontal:30,
        marginVertical:10,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center', 
        width:'80%',

    }
})
 
export default PaymentComponent;
