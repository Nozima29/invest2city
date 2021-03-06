import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {TextInput, View} from 'react-native';


import Icon from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Posts from '../components/Posts';
import Bid from '../components/Bid';
import Registration from '../components/Registration';  
import Login from '../components/Login';
import { Alert} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';


const PostsSnack = createStackNavigator({
  
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (<Icon name='md-menu' size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />),
        headerRight:(<Icon name='md-person' size={30} style={{ paddingRight: 10 }} onPress={() => Alert.alert(
          'Title',
          'Login Before Proceed',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
              text: 'Login',
              onPress: () => navigation.navigate('Login'),
              style: 'cancel',
            },
            {text: 'Register', onPress: () => navigation.navigate('Register')},
          ],
          {cancelable: false},
        )} />)
      };
    }
  },  
  Register: {screen: Registration},
  Posts: {screen: Posts, },
  Login:{screen:Login},
  Bid:{screen:Bid},

})


const SearchSnack = createStackNavigator({
  Search: {
    
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: null,
        headerLeft: (<Icon name='md-menu' size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />),
        headerRight: (
        <View style={{height:20, marginRight:260, flexDirection:'row'}}> 
      
        <FontAwesome5 name="search" marginRight={8} color="cdccce" size={15}/>         
          {/* <TextInput style={{ width:320, borderBottomWidth:0.5}}> */}
          
          < TextInput placeholder="Search" style={{ fontSize: 20,paddingLeft:250 }} />
            
         
        </View>
        )

      };
    }
  }
})

const ProfileSnack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (<Icon name='md-menu' size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />)
      };
    }
  }
})

const FavoritesSnack = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (<Icon name='md-menu' size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />)
      };
    }
  }
})




const DashboardTabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: PostsSnack,
    navigationOptions: () => {
      return {
        activeColor: '#FEBC40',
        barStyle: { backgroundColor: 'black' },
        tabBarIcon: (<FontAwesome5 name='home' size={18} color="#cdccce" />),
      };
    }
  },

  Search: {
    screen: SearchSnack,
    navigationOptions: () => {
      return {
        activeColor: '#FEBC40',
        barStyle: { backgroundColor: 'black' },
        tabBarIcon: (<FontAwesome5 raised name='search' size={18} color="#cdccce" />)
      };
    }
  },

  Favorites: {
    screen: FavoritesSnack,
    navigationOptions: () => {
      return {
        activeColor: '#FEBC40',
        barStyle: { backgroundColor: 'black' },
        tabBarIcon: (<FontAwesome5 name='heart' size={18} color="#cdccce" />)
      };
    }
  },

  Profile: {
    screen: ProfileSnack,
    navigationOptions: () => {
      return {
        activeColor: '#FEBC40',
        barStyle: { backgroundColor: 'black' },
        tabBarIcon: (<FontAwesome5 name='user' size={18} color="#cdccce" />)
      };
    }
  }
},



  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes
      [navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      }
    }
  },

)

const DashboardStackNavigator = createStackNavigator({
  DashboardTab: DashboardTabNavigator,

},

  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        
        headerLeft: <Icon name='md-menu' size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />
      };
    }
  })

const AppDrawNavigator = createDrawerNavigator({
  Settings: {
    screen: DashboardStackNavigator,
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: AppDrawNavigator },
  Dashboard: { screen: DashboardStackNavigator }
})

export default AppContainer = createAppContainer(AppSwitchNavigator);


