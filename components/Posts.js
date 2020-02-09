import React, { Component } from 'react';
import { TextInput, Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements';


export default class Posts extends Component {
  render() {

    return (
      //More...
      <View style={styles.container}>
      <View style={styles.cont1}>
        <View style={styles.image_container}>
          <Image
            style={styles.postdes_image}
            source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
          />
        </View>
        <View style={styles.postdes_container}>
          <Text style={styles.postdes_title}>React Native</Text>
          <Text style={styles.postdes_text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</Text>
          <Text style={styles.postdes_detail}>Address</Text>
          <Text style={styles.postdes_detail}>Size</Text>
          <Text style={styles.postdes_price}>Price</Text>
          <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() =>this.props.navigation.push('Login')}>
                  <Text style={styles.submitButtonText}>Buy</Text>
                </TouchableOpacity>
        </View>        
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
  },
  postdes_image: {
    width: '100%',
    height: '100%'
  },
  image_container: {
    alignContent: 'flex-start',
    width: '100%',
    height: 250,
  },
  postdes_container: {
    padding: 10,
  },
  postdes_title: {
    fontSize: 25,
    paddingBottom: 2,
    color: '#FEBC40',
    fontWeight: 'bold',
  },
  postdes_text: {
    fontSize: 12,
  },
  postdes_detail: {
    paddingVertical: 15,
    fontSize: 17,
    borderBottomWidth: 1
  },
  postdes_price: {
    paddingVertical: 15,
    fontSize: 17,
  },

  
  submitButton: {
    backgroundColor: '#FEBC40',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 25,
    fontSize: 16,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  },
  buy_button: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 15
  },

});

