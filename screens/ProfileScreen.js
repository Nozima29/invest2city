import React, { Component } from 'react';
import { TextInput, Modal, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      datasource: []
    };
  }

  componentDidMount() {
    return fetch('https://my-json-server.typicode.com/Nozima29/json-server/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(  
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () { }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }  
 
  render(){
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="black" animating />
        </View>
      );
    }
      return (
        <View style={styles.container}>
        <View style={styles.cont1}>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <ScrollView>
            
            <View style={styles.image_container}>
              <Image
                style={styles.image}
                source={require('../images/profile.png')} />

            </View>
            <View style={styles.postdes_container}>
              <Text style={styles.title}>Conatct Information</Text>
                        

              <Text style={styles.profile_detail}>First Name</Text>
              <Text style={styles.item}>{item.fname}</Text>


              <Text style={styles.profile_detail}>Last Name</Text>
              <Text style={styles.item}>{item.sname}</Text>

              <Text style={styles.profile_detail}>Email</Text>
              <Text style={styles.item}>{item.email}</Text>

              <Text style={styles.profile_detail}>Conatct Number</Text>
              <Text style={styles.item}>{item.phone_num}</Text>             

            </View>

      </ScrollView>
      )}
    />  

        </View>
      </View>
      );
    }
    
  }
    
  const styles = StyleSheet.create({
    container:
    {
      flex: 1,      
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
      width: '90%',
      height: '90%'
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
  