
import { Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import ElectricalPic from '../img/electrical.jpg'
import ChangeOverYard from '../img/Electrical_changeOverYard.jpg'

class Electrical extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={{width:'100%'}} >
          <Text>The electrical department in railway engineering is responsible for supplying electrical power in order to propel the locomotive and its load. It is divided into power supply substations and Overhead Track Equipment (OHTE).</Text>
         
          <Image
              source={ElectricalPic}
              style = {styles.tutorings}      
            />

          <Text>The team has an understanding of the traction power supply system, Overhead track equipment components and maintenance, substation operation and maintenance.</Text>


          <Image
              source={ChangeOverYard}
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

export default Electrical;
