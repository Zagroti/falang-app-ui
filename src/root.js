import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import SplashAuto from 'react-native-splash-screen';



//
//  import Our Component
//
import SplashScreen from './splash';
import MainScreen from './components/main';

// auth root
import AuthScreen from './components/auth/auth';
import LoginScreen from './components/auth/login';
import ActivityScreen from './components/auth/activity';



//
// Main and Maser Components
//

const RootStack = createStackNavigator({

    Splash : {screen : SplashScreen},
    Main : {screen : MainScreen},

    Auth : {screen : AuthScreen},
    Login : {screen : LoginScreen},
    Activity : {screen : ActivityScreen},

},
{
    initialRouteName : 'Activity',
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