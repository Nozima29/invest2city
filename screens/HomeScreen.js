import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, withTheme } from 'react-native-elements'
export default class HomeScreen extends Component {

  render() {

    return (
      <View style={styles.container}>
          {/* post section */}
          <View style={styles.post}>
            <View style={styles.post_comment}>
              <View style={styles.post_text}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                <Text style={styles.title}>React Native</Text>
                <Text style={styles.text_desc}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.post_icon}>
                <Icon
                  name='check-circle'
                  type='font-awesome'
                  color='skyblue'
                  onPress={() => this.props.navigation.navigate('Posts')} />
                <Icon
                  name='share'
                  type='font-awesome'
                  color='skyblue'
                  onPress={() => console.log('hello')} />
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

          <View style={styles.post_reverse}>
            <View style={styles.post_comment}>
              <View style={styles.post_text}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                <Text style={styles.title}>React Native</Text>
                <Text style={styles.text_desc}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.post_icon}>
                <Icon
                  name='check-circle'
                  type='font-awesome'
                  color='skyblue'
                  onPress={() => console.log('hello2')} />
                <Icon
                  name='share'
                  type='font-awesome'
                  color='skyblue'
                  onPress={() => this.props.navigation.navigate('Posts')} />
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
      </View>
    )
  }

}


const styles = StyleSheet.create({


  post: {
    height: 100,
    backgroundColor: '#DDE0E4',
    borderWidth: 0,
    marginVertical: 2,
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
    borderBottomColor: 'white',
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
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'skyblue',
    fontWeight: 'bold'
  },
  text_desc: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'left',
    color: '#3C3C3C',
  },
  post_image: {
    width: '30%'
  },
  post_comment: {
    width: '70%',
  },
  post_icon: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }



});
