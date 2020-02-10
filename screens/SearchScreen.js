import React, { Component } from 'react';
import { StyleSheet,  View,  Image, ScrollView, TouchableOpacity, ActivityIndicator, FlatList  } from 'react-native';


export default class SearchScreen extends Component {
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
  
  render(){
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
        
        <ScrollView  showsVerticalScrollIndicator={false} style={{width:400}}> 
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
            </View>
        
            )}
    />  
            
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
      alignItems: 'center',
      backgroundColor:'#000',
      justifyContent: 'center',
    },
    avtivity:{
      backgroundColor:'white',      
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
      paddingVertical:3,
      marginLeft: '4%',
      justifyContent:"center"
    },
    post: {
      width: 180,
      height:180,
      margin:1,
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
  