import React, { Component } from 'react'
import {Text,View} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import FB from "./Screens/fb"
import IN from "./Screens/in"

export default class App extends Component
{
     
       render(){
         return(

          <AppContainer/>

         )
       }

}

var TabNavigator = createBottomTabNavigator({
Facebook:{screen:FB},
Instagram:{screen:IN}
})

const AppContainer = createAppContainer (TabNavigator)