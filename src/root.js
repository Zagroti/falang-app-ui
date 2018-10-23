import React from 'react';
import { createStackNavigator , StackNavigator , TabNavigator} from 'react-navigation';
import { Platform } from 'react-native';
import SplashAuto from 'react-native-splash-screen';

import colors from './styles/colors';



//
//  import Our Component
//
import SplashScreen from './splash';
import MainScreen from './components/main';

// auth root
import AuthScreen from './components/auth/auth';
import LoginScreen from './components/auth/login';
import ActivityScreen from './components/auth/activity';

import IndexScreen from './components/wordsBox/index';  // show words

import ProScreen from './components/proComponent/proIndex';

import TestScreen from './test';





//
// Main and Maser Components
//


const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: 'red',
      position: 'absolute',
      borderBottomWidth: 2,
      zIndex: 100,
      elevation: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    headerTintColor: colors.white,
  }



const RootStack = StackNavigator({

    Splash : {screen : SplashScreen},
    Main : {screen : MainScreen},

    Auth : {screen : AuthScreen},
    Login : {screen : LoginScreen,  navigationOptions: { ...defaultNavigationOptions },},
    Activity : {screen : ActivityScreen},

    Index : {screen : IndexScreen},

    ProIndex : {screen : ProScreen},

    
    Test : {screen : TestScreen},

},
{
    //  initialRouteName : 'Auth',
     initialRouteName : 'Login',
    // initialRouteName : 'ProIndex',
    //  initialRouteName : 'Index',
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