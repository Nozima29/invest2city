import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { FontAwesome5 } from '@expo/vector-icons';
export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      datasource: []
    };
  }

  componentDidMount() {
    return fetch('https://my-json-server.typicode.com/Nozima29/json-server/posts')
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
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="black" animating />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.cont1}>          
          <ScrollView showsVerticalScrollIndicator={false} style={{ width: 400 }}>
            <View style={styles.posts}>
              
              <FlatList numColumns={2}
                data={this.state.dataSource}
                renderItem={({ item }) => (
                  
                  <View style={styles.post}>
                    <View style={styles.image}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                        <Image style={styles.image_post} source={{ uri: item.post_img }}
                        />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.text_cont}>
                      <Text style={styles.price}>{item.init_price}$</Text>
                      <Text >{item.title}</Text>
                    </View>
                    <View style={styles.icon} >
                      <FontAwesome5 name='heart' size={30} color="#FEBC40" />
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                        <FontAwesome5 name='share' size={30} color="#FEBC40" />
                      </TouchableOpacity>
                    </View>
                  </View>

                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    )
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
  avtivity:{
    backgroundColor:'white'
  },
  cont1: {
    flex: 1,
    backgroundColor: '#F5F3ED',
    height: '100%',
    width: '100%',
    borderBottomStartRadius: 80,
    borderBottomEndRadius: 80,
    overflow:'hidden'
  },
  posts: {
    flex:2,
    alignContent: 'center',
    flexShrink: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    flexGrow:2,
  
  },
  post: {
    width: '42%',
    height:350,
    backgroundColor: 'white',
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    margin: 5
  },
  image: {
    width: '100%',
    height: '50%',
    padding: 5,

  },
  image_post: {
    width: '100%',
    height: '100%'
  },
  text_cont: {
    padding: 5
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 8
  },
  text: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  icon: {
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
    flex: 2

  }


});
