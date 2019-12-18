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
import {createDrawerNavigator} from 'react-navigation-drawer'
import MySearch from './components/MySearch'

 class App extends React.Component {
  static navigationOptions = {
    drawerLabel: 'home',
  }
  render() {
    return (
      <View style={styles.container}>
        <MyHeader name='home' />
        <ImageBackground style={{ width: "100%", height: "55%" }} resizeMode="stretch" source={require('./assets/mycurve.png')} >
          <TextInput style={{ borderRadius: 30, margin: 50, backgroundColor: "white" }} />
        </ImageBackground>

        <View style={{flex:1,flexDirection:"row",marginTop:"-25%",justifyContent:"space-around"}}>
          <View>
            <Card style={styles.mycard}>
              
              <Card.Content>
                <Title>Card title</Title> 
              </Card.Content>
            </Card>
            <Card style={styles.mycard}>
              
              <Card.Content>
                <Title>Card title</Title>
                
              </Card.Content>
            </Card>
            <Card style={styles.mycard}>
              
              <Card.Content>
                <Title>Card title</Title>
               
              </Card.Content>
            </Card>
          </View>
          <View>
            <Card style={styles.mycard}>
              
              <Card.Content>
                <Title>Card title</Title>
               
              </Card.Content>
            </Card>
            <Card style={styles.mycard}>
             
              <Card.Content>
                <Title>Card title</Title>
                
              </Card.Content>
            </Card>
            <Card style={styles.mycard}>
              
              <Card.Content>
                <Title>Card title</Title>
               
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
    );
  }
};

const MyDrawer = createDrawerNavigator({
  search:MySearch,
  home:App,
  
})

export default createAppContainer(MyDrawer);

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


