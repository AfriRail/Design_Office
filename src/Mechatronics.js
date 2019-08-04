
import { Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';

import MechatronicsPic from '../img/electronics.jpg'
import rasPi from '../img/pi.jpg'
import piCam from '../img/piCam.jpg'

class Mechatronics extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <ScrollView style={{width:'100%'}} >
          <Text> </Text>

          <Image
            source={MechatronicsPic}
            style = {styles.tutorings}
            />

          <Image
            source={piCam}
            style = {styles.tutorings}
            />  

          <Image
            source={rasPi}
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

export default Mechatronics;
