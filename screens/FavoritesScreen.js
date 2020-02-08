import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView,  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class FavoritesScreen extends Component {

  render() {
 
    return (
      <View style={styles.container}>
        <View style={styles.cont1}>

            <ScrollView  showsVerticalScrollIndicator={false} style={{width:400}}> 
            <View style={styles.posts}>

            <View style={styles.post}>
              <View style={styles.image}>
                <Image style={styles.image_post} source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                />
              </View>
              <View style={styles.text_cont}>
                <Text style={styles.price}>26.5$</Text>
                <Text style={styles.title}>Title for post</Text>
                <Text style={styles.text}>Looking for UI app design? Learn more about our works here </Text>
              </View>
              <View style={styles.icon} >
                <FontAwesome5 solid name='heart' size={30} color="#FEBC40" />
              </View>
            </View>
        
            <View style={styles.post}>
              <View style={styles.image}>
                <Image style={styles.image_post} source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                />
              </View>
              <View style={styles.text_cont}>
                <Text style={styles.price}>26.5$</Text>
                <Text style={styles.title}>Title for post</Text>
                <Text style={styles.text}>Looking for UI app design? Learn more about our works here </Text>
              </View>
              <View style={styles.icon} >
                <FontAwesome5 solid name='heart' size={30} color="#FEBC40" />
              </View>
            </View>
            <View style={styles.post}>
              <View style={styles.image}>
                <Image style={styles.image_post} source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                />
              </View>
              <View style={styles.text_cont}>
                <Text style={styles.price}>26.5$</Text>
                <Text style={styles.title}>Title for post</Text>
                <Text style={styles.text}>Looking for UI app design? Learn more about our works here </Text>
              </View>
              <View style={styles.icon} >
                <FontAwesome5 solid name='heart' size={30} color="#FEBC40" />
              </View>
            </View> 
            </View> 
          </ScrollView>
         
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
    backgroundColor: '#F5F3ED',
    alignItems: 'center',
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
    width: 190,
    height:400,
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
    justifyContent: 'center',
    flex: 1

  }

});
