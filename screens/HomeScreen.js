import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  
  render(){
        
    return (
      
      <View style={styles.container}>        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Posts')}>
          <Text style={{fontSize:30, color:"#509FFF"}}>See the Post</Text>
        </TouchableOpacity>
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
  