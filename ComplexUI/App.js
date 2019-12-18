/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, ScrollView, ImageBackground, View, Text, StatusBar, } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import MyHeader from './components/MyHeader';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from'react-navigation-stack'
import MySearch from './components/MySearch'
import Icon from 'react-native-ionicons'


const MyTabs = createMaterialTopTabNavigator({
  chats:MySearch,
  status:MySearch, 
  calls:MySearch
},{
  tabBarOptions:{
    style:{
      backgroundColor:'#047a6c'
    }
  }
})

const MyStack=createStackNavigator({
  home:MyTabs
},{
  defaultNavigationOptions: {
    title:'whatsApp',
    headerStyle: {
      backgroundColor: '#047a6c',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight:(
      <View style={{flexDirection:'row',padding:20}}>
        <Icon name="md-search" size={30} color="white" />
        <Icon name="dots-three-vertical" size={23} color="white" />
      </View>
    )
  },

})
export default createAppContainer(MyStack);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  mycard:{
    marginBottom:10,
    elevation:5
  }
});


