import React, { Component } from 'react';
import { TextInput, Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements';


export default class Posts extends Component {
  state = {
    modalVisible: false,
    email: ' ',
    password: ' '
  }
  togglemodal(visible) {
    this.setState({ modalVisible: visible });
  }
  handleEmail = (text) => {
    this.setState({ email: text });
  }
  handlePassword = (text) => {
    this.setState({ password: text });
  }
  login = (email, pass) => {
    alert('email: ' + email + '\n' + 'password: ' + pass + '\n' + 'Submitted')
  }

  render() {

    return (
      //More...
      <View style={styles.container}>
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
          <Button style={styles.buy_button} onPress={() => { this.togglemodal(true) }} rounded warning >
            <Text style={styles.submitButtonText}>Buy</Text>
          </Button>
        </View>        
        {/* Modal section */}
        <View style={styles.container}>
          <Modal animationType={'slide'} transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { console.log('Modal has been closed.') }}>
            <View style={styles.modal}>
              <View style={styles.modal_icon}>
                <TouchableOpacity onPress={() => { this.togglemodal(false) }} >
                  <Icon raised
                    name='arrow-left'
                    type='font-awesome'
                    color='#FEBC40'
                    size={30}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modal_text_container}>
                <Text style={styles.modal_text}>Login</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='transparent'
                  placeholder='Email'
                  placeholderTextColor='#2296F3'
                  autoCapitalize='none'
                  onChangeText={this.handleEmail} />
                <View >
                  <TextInput style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='#2296F3'
                    autoCapitalize=
                    'none' placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={this.handlePassword} />
                </View>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={
                    () => this.login(this.state.email, this.state.password)
                  }>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

  modal: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'column'
  },
  modal_text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FEBC40'
  },
  modal_icon: {
    position: 'absolute',
    padding: 10,
  },
  modal_text_container: {
    marginTop: 100,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#2296F3',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 25,
    fontSize: 16,
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

