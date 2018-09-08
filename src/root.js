import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import SplashAuto from 'react-native-splash-screen';



//
//  import Our Component
//
import SplashScreen from './splash';
import MainScreen from './components/main';
import AuthScreen from './components/auth';



//
// Main and Maser Components
//

const RootStack = createStackNavigator({

    Splash : {screen : SplashScreen},
    Main : {screen : MainScreen},
    Auth : {screen : AuthScreen},

},
{
    initialRouteName : 'Auth',
    headerMode: 'none'

}) 


//
// export App from root stack
//

export default class Root  extends React.Component{

    componentDidMount() {
        if (Platform.OS !== 'ios') SplashAuto.hide();
        console.disableYellowBox = true
      }


    render(){
        return(

            <RootStack />
        );
    }
}