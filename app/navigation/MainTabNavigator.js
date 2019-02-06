import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'


import ServiceScreen from '../screens/ServiceScreen'
import DetailServiceScreen from '../screens/DetailServiceScreen'
import ProfileScreen from '../screens/ProfilScreen'


const ServiceStack = createStackNavigator({
    Services:ServiceScreen,
    Detail : DetailServiceScreen
})
ServiceStack.navigationOptions = {
    tabBarLabel: 'Services',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/conversation.png')}
      />),
  };

const ProfilStack = createStackNavigator({
    Profil:ProfileScreen,
    Detail : DetailServiceScreen

})
ProfilStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/user.png')}
      />),
  };

const TransportStack = createStackNavigator({
    Services:ServiceScreen

})
TransportStack.navigationOptions = {
    tabBarLabel: 'Transport',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/tram.png')}
      />),
  };

const OpinionStack = createStackNavigator({
    Services:ServiceScreen

})

OpinionStack.navigationOptions = {
    tabBarLabel: 'Opinion',
    tabBarIcon: (
      <Image style={{ height: 26, width: 26 }}
        source={require('../assets/icons/review.png')}
      />),
  };
  

export default createBottomTabNavigator({
    Service : ServiceStack,
    Transport : TransportStack,
    Opinion : OpinionStack,
    Profile : ProfilStack

  });