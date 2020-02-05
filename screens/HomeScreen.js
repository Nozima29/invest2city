import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons';
export default class HomeScreen extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.cont1}>
          {/* post section */}
          <View style={styles.posts} >
            <ScrollView>
            <View style={styles.post}>
              <View style={styles.post_comment}>
                <View style={styles.post_text}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                    <Text style={styles.title}>React Native</Text>
                    <Text style={styles.text_desc}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.post_icon}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                    <Icon
                      name='share'
                      type='font-awesome'
                      color='#FEBC40'
                    />
                  </TouchableOpacity>
                  <FontAwesome5 name='heart' size={22} color="#FEBC40" />
                </View>
              </View>
              <View style={styles.post_image}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                  <Image
                    style={styles.image}
                    source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                  />
                </TouchableOpacity>
              </View>
            </View>     
            </ScrollView>
          </View>
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
  cont1: {
    flex: 1,
    backgroundColor: '#F5F3ED',
    height: '100%',
    width: '100%',
    borderBottomStartRadius: 80,
    borderBottomEndRadius: 80,
    overflow:'hidden'
  },
  post: {
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 4,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,

  },
  post_text: {
    width: '100%',
    paddingLeft: 5,
    borderBottomColor: '#FEBC40',
    borderBottomWidth: 2,
    height: '75%'
  },
  post_reverse: {
    flexDirection: 'row-reverse',
    height: 100,
    backgroundColor: '#DDE0E4',
    borderWidth: 0,
    marginVertical: 5,

  },
  image: {
    width: 120,
    height: 100
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#FEBC40',
    fontWeight: 'bold'
  },
  text_desc: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'left',
    color: '#3C3C3C',
  },
  post_image: {
    // width: '40%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10
  },
  post_comment: {
    width: '65%',
  },
  post_icon: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },




});
