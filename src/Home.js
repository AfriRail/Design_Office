
import { Text, View, StyleSheet, ScrollView, Image, Button} from 'react-native';
import React, {Component} from 'react';

import {createStackNavigator, createAppContainer } from 'react-navigation'

import HomePic from '../img/intro.jpg'
import RailwayBridge  from '../img/Civil_RailwayBridge.jpg'
import RailwayTech from '../img/railway_40.jpg'

import ModalComponent from '../src/Modal/HomeModal'

import ContactUs from '../src/DashboardScreen'
import Mechanical from '../src/Mechanical'


class Home extends Component {
    render() {

      const { navigate } = this.props.navigation;

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={{width:'100%'}} >
          
          
          <Image
            source={HomePic}
            style = {styles.tutorings}
            />      

          <Image
            source={RailwayBridge}
            style = {styles.tutorings}
            />   

          <Image
            source={RailwayTech}
            style = {styles.tutorings}
            />        

          <Button
            style = {styles.tutorings}
            title="Finite Element Analysis (FEA)"

            onPress = {()=>{
              navigate('Fea')
            }}

          />
        
        </ScrollView>
        </View>
      );
    }
  }

  //export default Home; 

  const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },

    Fea:{
    screen: ContactUs,
  },

  });


  export default createAppContainer(AppNavigator);

  const styles = StyleSheet.create({
    tutorings:{
      width: '100%',
      height: 300,
      marginTop: 10,
      marginBottom: 10,
    },
  }); 







/*

          <Button title="Finite Element Analysis (FEA)"
          onPress={() => this.props.navigation.navigate('ContactUs')}/>


           <ModalComponent />
*/
