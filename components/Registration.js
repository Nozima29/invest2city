import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default class Registartion extends Component {
  state = {
    Firstname:' ',
    Lastname:' ',
    Phone:' ',
    email: ' ',
    password: ' '
  }

  handleFirstname = (text) => {
    this.setState({ Firstname: text });
  }
  handleLastname = (text) => {
    this.setState({ Lastname: text });
  }
  handlePhone = (text) => {
    this.setState({ Phone: text });
  }
  handleEmail = (text) => {
    this.setState({ email: text });
  }
  handlePassword = (text) => {
    this.setState({ password: text });
  }
  login = (Firstname, Lastname, Phone, email, pass) => {
    alert('Firstname: ' + Firstname + '\n' + 'Lastname: ' + Lastname + '\n'+'Phone: ' + Phone + '\n'+'email: ' + email + '\n' + 'password: ' + pass + '\n' + 'Submitted')
  }
  render() {

    return (

      <View style={styles.container}>
        <View style={styles.cont1}>

          <Text style={styles.modal_text}>Register</Text>
          <TextInput style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Firstname'
            placeholderTextColor='#2296F3'
            autoCapitalize='none'
            onChangeText={this.handleFirstname} />

          <TextInput style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Lastname'
            placeholderTextColor='#2296F3'
            autoCapitalize='none'
            onChangeText={this.handleLastname} />

          <TextInput style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Phone'
            placeholderTextColor='#2296F3'
            autoCapitalize='none'
            onChangeText={this.handlePhone} />

          <TextInput style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Email'
            placeholderTextColor='#2296F3'
            autoCapitalize='none'
            onChangeText={this.handleEmail} />
          
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholderTextColor='#2296F3'
              autoCapitalize='none' 
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={this.handlePassword} />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={
              () => this.login(this.state.Firstname, this.state.Lastname,this.state.Phone,this.state.email, this.state.password)
            }>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

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
  cont1: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    height: '100%',
    width: '100%',
    borderBottomStartRadius: 80,
    borderBottomEndRadius: 80,
    justifyContent: 'center',
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
});
