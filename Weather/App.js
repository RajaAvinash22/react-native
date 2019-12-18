/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { TextInput, Card, List } from 'react-native-paper';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-ionicons';
import SearchScreen from './components/SearchScreen'
import HomeScreen from './components/HomeScreen'



const TabNavigator = createBottomTabNavigator(
  {
  'current city': HomeScreen,
  'select city': SearchScreen,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({  tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'current city') {
        iconName = 'md-cloud';
      
        
      } else if (routeName === 'select city') {
        iconName = 'md-checkmark-circle';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor:"#6200ee",
    inactiveBackgroundColor:'#6200ee'
  },
}
);

export default createAppContainer(TabNavigator);