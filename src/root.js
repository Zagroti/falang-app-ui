import React from 'react';
import { createStackNavigator , StackNavigator , TabNavigator, SwitchNavigator} from 'react-navigation';
import { Platform } from 'react-native';
import SplashAuto from 'react-native-splash-screen';

import colors from './styles/colors';



//
//  import Our Component
//
import SplashScreen from './splash';
import MainScreen from './components/screens/main';

// auth root
import AuthScreen from './components/auth/auth';
import LoginScreen from './components/auth/login';
import ActivityScreen from './components/auth/activity';

import IndexScreen from './components/wordsBox/index';  // show words

import ProScreen from './components/proComponent/proIndex';
import PaymentScreen from './components/proComponent/payment';

import TestScreen from './test';





//
// Main and Maser Components
//


const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.red,
      position: 'absolute',
      zIndex: 100,
      elevation: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    headerTintColor: colors.white,
  }


// All Auth component befor login is hear ------>
const AuthLoadingScreen = StackNavigator({

    Splash : {
        screen : SplashScreen
    },
    Main : {
        screen : MainScreen
    },

    Auth : {
        screen : AuthScreen
    },
    Login : {
        screen : LoginScreen,  navigationOptions: { ...defaultNavigationOptions },
    },
    Activity : {
        screen : ActivityScreen
    },



    
    Test : {
        screen : TestScreen
    },

},
{
     initialRouteName : 'Auth',
    //  initialRouteName : 'Login',
    // initialRouteName : 'Paymnet',
    //  initialRouteName : 'Index',
    headerMode: 'none'

}) 


 // All orginal Component After login in hear ----->
const MainStack = StackNavigator({
    Main : {
        screen : MainScreen
    },
    Index : {
        screen : IndexScreen
    },

    ProIndex : {
        screen : ProScreen
    },
    Paymnet : {
        screen : PaymentScreen
    },

},
{
    navigationOptions: {...defaultNavigationOptions}
})


const App = SwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainStack, 
    },
    {
      initialRouteName: 'AuthLoading',
    },
  )





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
            <App />
        
        );
    }
}