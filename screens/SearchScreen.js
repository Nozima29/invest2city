import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class SearchScreen extends Component {
    render(){
      return (
        <View style={styles.container}>
        <View style={styles.cont1}>
        <ScrollView  showsVerticalScrollIndicator={false} style={{width:400}}> 
            <View style={styles.posts}>
              
            <View style={styles.post}>
              
              <View style={styles.image}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                <Image style={styles.image_post} source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                />
                </TouchableOpacity>
              </View>
            </View>
        
            <View style={styles.post}>
              <View style={styles.image}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Posts')}>
                <Image style={styles.image_post} source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.post}>
              <View style={styles.image}>
                <Image style={styles.image_post} source={require('C:/Users/User/Documents/Projects/ReactNative/Invest2city/invest2city/screens/PicsArt_09-26-10.44.03.jpg')}
                />
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
    cont1:{
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
      paddingVertical:5,
      justifyContent:"center"
    },
    post: {
      width: 180,
      height:180,
      margin:2,
    },
    image: {
      width: '100%',
      height: '100%',
      padding: 5
    },
    image_post: {
      width: '100%',
      height: '100%'
    },

  });
  