import React from 'react';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from '@expo/vector-icons/Ionicons';
import {FontAwesome5} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Posts from '../components/Posts';


const PostsSnack = createStackNavigator({  
    Home:{
      screen: HomeScreen,  
      navigationOptions:({navigation})=>{
        return{
          headerLeft: (<Icon name='md-menu' size={30} style={{paddingLeft:10 }} onPress={()=>navigation.openDrawer()}/>)
        };
      }
    },
    Posts: Posts 
  })
  
  const SearchSnack = createStackNavigator({  
    Search:{
      screen: SearchScreen,  
      navigationOptions:({navigation})=>{
        return{        
          headerLeft: (<Icon name='md-menu' size={30} style={{paddingLeft:10 }} onPress={()=>navigation.openDrawer()}/>)
        };
      }
    }  
  })
  
  const ProfileSnack = createStackNavigator({  
    Profile:{
      screen: ProfileScreen,  
      navigationOptions:({navigation})=>{
        return{                  
          headerLeft: (<Icon name='md-menu' size={30} style={{paddingLeft:10 }} onPress={()=>navigation.openDrawer()}/>)
        };
      }
    }  
  })
  
  const FavoritesSnack = createStackNavigator({
    Favorites:{
      screen: FavoritesScreen,
      navigationOptions:({navigation})=>{
        return{        
          headerLeft: (<Icon name='md-menu' size={30} style={{paddingLeft:10 }} onPress={()=>navigation.openDrawer()}/>)
        };
      }
    }
  })

  const DashboardTabNavigator = createBottomTabNavigator({
    Home:{
      screen: PostsSnack,    
      navigationOptions:()=>{
        return{                    
          tabBarIcon: (<FontAwesome5 name='home' size={25} color="#cdccce"/>),           
        };
      }
      },   
    
    Search:{
      screen:SearchSnack,
      navigationOptions:()=>{
        return{
          tabBarIcon: (<FontAwesome5 name='search' size={25} color="#cdccce"/>)
        };
      } 
    },       
    
    Favorites:{
      screen: FavoritesSnack,
      navigationOptions:()=>{
        return{
          tabBarIcon: (<FontAwesome5 name='heart' size={25} color="#cdccce"/>)
        };
      }
    }, 

    Profile:{
      screen: ProfileSnack,
      navigationOptions:()=>{
        return{
          tabBarIcon: (<FontAwesome5 name='user' size={25} color="#cdccce"/>)
        };
      }
    }  
  },
  
  {
    navigationOptions: ({navigation})=>{
      const {routeName} = navigation.state.routes
      [navigation.state.index];
      return{
        header:null,
        headerTitle:routeName,        
      }
    }  
  }
  
  )
  
  const DashboardStackNavigator = createStackNavigator({
    DashboardTab: DashboardTabNavigator
  },
  {
    defaultNavigationOptions:({navigation})=>{
      return{
        headerLeft: <Icon name='md-menu' size={30} style={{paddingLeft:10 }} onPress={()=>navigation.openDrawer()}/>
      };
    }
  })
  
  const AppDrawNavigator = createDrawerNavigator({
    Settings:{
      screen: DashboardStackNavigator,    
    }
  })
  
  const AppSwitchNavigator = createSwitchNavigator({
    Welcome: {screen: AppDrawNavigator},
    Dashboard: {screen: DashboardStackNavigator}
  })
  
  export default AppContainer = createAppContainer(AppSwitchNavigator);
  

  