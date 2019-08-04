
import { Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';

import MechanicalPic from '../img/wagon.jpg'
import fixedTurnout from '../img/Turnout_Fixed.jpg'
import MovableTurnout from '../img/Turnout_Movable.jpg'

class Mechanical extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={{width:'100%'}} >
        <Text>The mechanical department in railway engineering is responsible for the development and compiling of technical specifications, maintenance procedures as well as manufacturing procedures.</Text>

        <Image
          source={MechanicalPic}
          style = {styles.tutorings}
        />

       <Text>The team also specializes in instrumentation and data acquisition, conducted tests (On-track), data analysis and condition monitoring.</Text>



        <Image
          source={fixedTurnout}
          style = {styles.tutorings}
        />

        <Image
          source={MovableTurnout}
          style = {styles.tutorings}
        />
        </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tutorings:{
      width: '100%',
      height: 300,
      marginTop: 20,
    }
  });    

export default Mechanical;
