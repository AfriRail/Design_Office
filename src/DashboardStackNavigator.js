import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation'

import DashboardTabNavigator from './DashboardTabNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home'
import ContactUs from './DashboardScreen'

const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {
      //header: null, 
      tabBarVisible: false, 

        
      headerTitle: 'Design Office',
      headerLeft: (
        <TouchableOpacity style= { {paddingLeft: 10} }
            onPress={() => navigation.openDrawer() }>
                
          <Ionicons name={"ios-menu"} size={30} color={"black"}  />

        </TouchableOpacity>  
      ),
      headerRight: (
        <TouchableOpacity style= { {paddingRight: 10} }
        onPress={() => alert('Inbox Empty')}>
                
          <Ionicons name={"ios-mail"} size={30} color={"black"} />

        </TouchableOpacity>  
      ),
    

    };
  } 
},

)



export default DashboardStackNavigator;