
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createDrawerNavigator, createStackNavigator} from 'react-navigation'

import DashboardTabNavigator from './DashboardTabNavigator';

import DashboardStackNavigator from './DashboardStackNavigator'

import Electrical from './Electrical'
import Mechanical from './Mechanical'
import Signal from './Signal'
import Civil from './Civil'
import Mechatronics from './Mechatronics'


const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
      screen: DashboardStackNavigator,
      navigationOptions: {
        drawerLabel: "DISCIPLINES:"
      },
    },
    Screen2: { //Title: 'LL',
      screen: Electrical,
      navigationOptions: {
        drawerLabel: "Electrical"
      }}
     , 

    Screen3: { //Title: 'LL',
      screen: Mechanical,
      navigationOptions: {
        drawerLabel: "Mechanical"
      }}    
  
    ,
    Screen4: { //Title
      screen: Signal,
      navigationOptions: {
        drawerLabel: "Signal"
      }}  

    ,
    Screen5: { //Title
      screen: Civil,
      navigationOptions: {
        drawerLabel: "Perway"
      }}      

      ,
      Screen6: { //Title
        screen: Mechatronics,
        navigationOptions: {
          drawerLabel: "Mechatronics 4.0"
        }}   
      
  });

export default AppDrawerNavigator;
