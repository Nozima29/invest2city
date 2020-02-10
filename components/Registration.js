import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Login from './Login';  
export default class Registartion extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      data: []  
    }   
  } 
  
  login(){      
    const dict = {
      'email': this.state.email,
      'password': this.state.password
    }
    this.setState({
      data: this.state.data.push(dict)
    })
    console.log(this.state.data);    
    alert("Registered Successfully");
    
    return <Login data={this.state.data}/> 
    
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
            onChange = {(text)=>this.setState({fname:text})}/>

          <TextInput style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Lastname'
            placeholderTextColor='#2296F3'
            autoCapitalize='none'
            onChange = {(text)=>this.setState({sname:text})}/>

          <TextInput style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Phone'
            placeholderTextColor='#2296F3'
            autoCapitalize='none'
            onChange = {(text)=>this.setState({phone:text})}/>

          <TextInput style={styles.input}
            underlineColorAndroid='transparent'
            placeholder='Email'
            placeholderTextColor='#2296F3'
            autoCapitalize='none'
            onChangeText = {(text) => this.setState({email:text})}
            value = {this.state.email}/>
          
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholderTextColor='#2296F3'
              autoCapitalize='none' 
              placeholder='Password'
              secureTextEntry={true}
              onChangeText = {(text)=>this.setState({password:text})}
              value = {this.state.password}/>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={
              () => this.login()
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
    width: '50%',
    marginLeft: '25%'
  },
  submitButtonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  },
});
