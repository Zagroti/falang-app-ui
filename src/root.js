import React from 'react';
import { createStackNavigator } from 'react-navigation';



//
//  import Our Component
//

import MainScreen from './components/main';
import AuthScreen from './components/auth';

const RootStack = createStackNavigator({


    Main : {screen : MainScreen},
    Auth : {screen : AuthScreen},

},
{
    initialRouteName : 'Main',
    headerMode: 'none'

}) 


export default class Root  extends React.Component{
    render(){


        return(
            <RootStack />

        );
    }
}