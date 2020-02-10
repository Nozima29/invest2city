import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      datasource: []
    };
  }

  componentDidMount() {
    return fetch('https://my-json-server.typicode.com/Nozima29/json-server/post')
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
  
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="black" animating />
        </View>
      );
    }
    
    return (
     <ScrollView>     
      <View style={styles.container}>      
      <FlatList 
          data={this.state.dataSource}
          renderItem={({ item }) => (
      <View style={styles.cont1}>  
        <View style={styles.image_container}>
          <Image
            style={styles.postdes_image}
            source={{ uri: item.post_img }}
          />
        </View>
        
        <View style={styles.postdes_container}>
          <Text style={styles.postdes_title}>{item.title}</Text>
          <Text style={styles.postdes_text}>{item.description}</Text>
          <Text style={styles.postdes_detail}>{item.address}</Text>
          <Text style={styles.postdes_detail}>{item.bid_end_date}</Text>
          <Text style={styles.postdes_price}>{item.init_price}</Text>
          <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() =>this.props.navigation.push('Login')}>
                  <Text style={styles.submitButtonText}>Buy</Text>
                </TouchableOpacity>
          </View>
         
      </View>
      )}
    />        
      </View>
      
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
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

