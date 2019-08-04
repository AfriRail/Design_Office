
import { Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';

import CivilPic from '../img/perway.jpg'
import Bridge from '../img/Civil_bridge.jpg'

class Civil extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <ScrollView style={{width:'100%'}} >
          <Text>The perway department in railway engineering is responsible for providing a stable guideway for train transportation. It is divided into the track structure and the supporting structures (i.e. bridges, culvets etc.)</Text>

          <Image
          source={CivilPic}
          style = {styles.tutorings}
        />

        <Text>The team deals with failure modes and maintenance requirements for rails, sleeper and fastening systems, turnouts, ballast, formation and drainage systems, bridges and structures.</Text>

        <Image
          source={Bridge}
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

export default Civil;

