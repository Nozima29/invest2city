import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProfileScreen extends Component {
    render(){
      return (
        <View style={styles.container}>
        <View style={styles.cont1}>
          
        </View>
      </View>
      );
    }
    
  }
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cont1:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      height:'100%',
      width:'100%',
      borderBottomStartRadius:80,
      borderBottomEndRadius:80,
      justifyContent: 'center',
    }
  });
  