import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator,createMaterialTopTabNavigator,createTopTabNavigator} from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home'
import Electrical from './Electrical'
import Signal from './Signal'
import Civil from './Civil'
import Mechatronics from './Mechatronics'
import Mechanical from './Mechanical'
import HomeStack from './HomeStack'
//import ElectricalStack from './ElectricStack'
//import SignalStack from './SignalStack'
//import CivilStack from './CivilStack'
//import MechatronicsStack from './MechatronicsStack'
//import MechanicalStack from './MechanicalStack'


const DashboardTabNavigator = createMaterialTopTabNavigator({
    Home:{
      screen: Home,
      navigationOptions:{
        tabBarLabel:'Home',
      }
    }
    ,
    Electrical:{
      screen: Electrical,
      navigationOptions:{
        tabBarLabel:'Electrical',
      }
    },
    Mechanical:{
      screen: Mechanical,
      navigationOptions:{
        tabBarLabel:'Mechanical',
      }
    },
    Signal:{
      screen: Signal,
      navigationOptions:{
        tabBarLabel:'Signal',
      }
    },
    Civil:{
      screen: Civil,
      navigationOptions:{
        tabBarLabel:'Civil',
      }
    },
    Mechatronics:{
      screen: Mechatronics,
      navigationOptions:{
        tabBarLabel:'Mechatronics',
      }
    },
},{ 
          tabBarPosition: 'bottom',
          
          tabBarOptions: {
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffffff',
          pressColor: '#4169e1',
          scrollEnabled: true,
          indicatorStyle: {
            borderBottomColor: '#ffffff',
            borderBottomWidth: 4,
          },
          labelStyle:{
            fontSize: 14,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabStyle: {
            width: 160,
            //height: 10,
          },
          style: {
            backgroundColor: '#191970',
          },
          tabStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          }
        }

});



export default DashboardTabNavigator;
