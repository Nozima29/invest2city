import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FavoritesScreen extends Component {
    render(){
      return (
        <View style={styles.container}>
          <Text>Favorites container</Text>
          
        </View>
      );
    }
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  