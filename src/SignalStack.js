import { Text, View, StyleSheet, Button, Image ,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons';

import Signal from './Signal'
import ContactUs from './DashboardScreen'

const FeedStack = createStackNavigator({
    Signal: {
        screen: Signal,

        navigationOptions: ({ navigation }) => {
            //const { routeName } = navigation.state.routes[navigation.state.index];
            return { 
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
    ContactUs:{
        screen: ContactUs
    }
},{
    defaultNavigationOptions:{
        gesturesEnabled:false
    }

})

export default FeedStack;

