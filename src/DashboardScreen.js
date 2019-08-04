
import { Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';

import PantoPic from '../img/lake.jpg'
import wheel_rail from '../img/wheel_rail.jpg'
import wheel from '../img/wheel.jpg'
import turnout from '../img/turnout.jpg'

class ContactUs extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <ScrollView style={{width:'100%'}} >
          <Text>Finite Element Analysis</Text>
          
          <Image
            source={wheel}
            //source={{uri:'https://picsum.photos/400/400'}}
            style = {styles.tutorings}
            //resizeMode="contain"
            //onLoadEnd = {()=>alert('image loaded')}

            />
 
          <Image
            source={PantoPic}
            //source={{uri:'https://picsum.photos/400/400'}}
            style = {styles.tutorings}
            //resizeMode="contain"
            //onLoadEnd = {()=>alert('image loaded')}

            />

          <Text>      </Text>  

          <Image
            source={wheel_rail}
            //source={{uri:'https://picsum.photos/400/400'}}
            style = {styles.tutorings}
            //resizeMode="contain"
            //onLoadEnd = {()=>alert('image loaded')}

            />

          <Image
            source={turnout}
            //source={{uri:'https://picsum.photos/400/400'}}
            style = {styles.tutorings}
            //resizeMode="contain"
            //onLoadEnd = {()=>alert('image loaded')}

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


export default ContactUs;
