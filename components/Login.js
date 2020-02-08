import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    state = {
        
        email: ' ',
        password: ' '
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
            <View style={styles.container}>
                <View style={styles.cont1}>
                   
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
                        <Text style={styles.submitButtonText}>Login</Text>
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
        alignContent:'center',
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
});
