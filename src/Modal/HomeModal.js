import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Modal, ScrollView, Image} from 'react-native';

import PantoPic from '../../img/lake.jpg'
import wheel_rail from '../../img/wheel_rail.jpg'
import wheel from '../../img/wheel.jpg'
import turnout from '../../img/turnout.jpg'

class ModalComponent extends Component{
    state = {
        modal:false
    }

    handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true:false 
        })
    }

    render(){
        return(

            <View>
                
                <Button style={{alignItems: 'center', justifyContent: 'center' }}
                    title="Open FEA Images"
                    onPress={this.handleModal}
                />
                    
                <Modal
                    visible={this.state.modal}
                    animationType = {'slide'}
                >
                
                <View>
                    <ScrollView style={{width:'100%'}} > 

                    <View style={{alignItems: 'center', justifyContent: 'center' }}>
                        <Text>
                            Finite Element Analysis
                        </Text>
                    </View>

                    <Image
                        source={wheel}
                        style = {styles.tutorings}
                    />

                    <Image
                        source={PantoPic}
                        style = {styles.tutorings}
                     />

                    <Image 
                        source={wheel_rail}
                        style = {styles.tutorings}
                    />

                    <Button
                        title="<- Back to Home"
                        onPress={this.handleModal}
                    />

                    </ScrollView>

                </View>

                </Modal>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tutorings:{
      width: '100%',
      height: 300,
      marginTop: 10,
      marginBottom: 10,
    }
  }); 

export default ModalComponent;
