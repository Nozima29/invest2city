import React, { Component } from 'react';
import { TextInput, Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class ProfileScreen extends Component {
    render(){
      return (
        <View style={styles.container}>
        <View style={styles.cont1}>
          
        <ScrollView>

        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={require('../images/img1.jpg')} />

        </View>
        <View style={styles.postdes_container}>
          <Text style={styles.title}>Conatct Information</Text>
                    

          <Text style={styles.profile_detail}>First Name</Text>
          <Text style={styles.item}></Text>


          <Text style={styles.profile_detail}>Last Name</Text>
          <Text style={styles.item}></Text>

          <Text style={styles.profile_detail}>Email</Text>
          <Text style={styles.item}></Text>

          <Text style={styles.profile_detail}>Conatct Number</Text>
          <Text style={styles.item}></Text>

          <Text style={styles.profile_detail}>Address</Text>
          <Text style={styles.item}></Text>

        </View>



      </ScrollView>


        </View>
      </View>
      );
    }
    
  }
    
  const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cont1:{
      flex: 1,
      backgroundColor: 'white',
      alignContent: 'center',
      height: '100%',
      width: '100%',
      borderBottomStartRadius: 80,
      borderBottomEndRadius: 80,
      justifyContent: 'center',
      overflow:"hidden"
    },

    image: {
      width: '100%',
      height: '100%'
    },
    image_container: {
      alignContent: 'flex-start',
      width: '100%',
      height: 250,
    },
    postdes_container: {
      padding: 19,
      width:'100%'
    },
    
    title: {
      fontSize: 20,
      fontStyle: 'italic',
      color: '#FEBC40',
      fontWeight: 'bold'
    },
  
  
    profile_text: {
      fontSize: 15,
    },
    profile_detail: {
      paddingVertical: 15,
      fontSize: 17,
      borderBottomWidth: 0
    },
    profile_detail: {
      paddingVertical: 15,
      fontSize: 17,
    },

    item:{
      margin:15,
      padding:9,
      marginTop:5,
      borderColor:'#bbb',
      borderWidth:1,
      borderStyle:'dashed',
      borderRadius:8,
      flexDirection:'row'

      
    }
  



  });
  