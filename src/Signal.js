
import { Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';

import SignalPic from '../img/signals.jpg'
import Points from '../img/Signal_Points.jpg'

class Signal extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={{width:'100%'}} >
          <Text>The signaling department provides a communication system between the train driver and the train control officer, to ensure safety by avoiding train collisions. It consists of train authorisation and condition assessment systems.</Text>

          <Image
          source={SignalPic}
          style = {styles.tutorings}
        />

        <Text>The team has an understanding of the different technologies that are used in the TAS and CAS environment to deliver the safe passage of trains as part of train authorization system.</Text>


        <Image
          source={Points}
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


export default Signal;

