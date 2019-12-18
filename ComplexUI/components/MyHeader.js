import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar} from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-ionicons'

export default class MyHeader extends React.Component{
  render(){   
        return (
          <Appbar.Header style={{backgroundColor:'white'}}>
            <Icon name='md-menu' size={34} color='#F86262' style={{marginLeft:10}} />
            <Text style={{color:"#F86262",marginLeft:22,fontSize:25}}>{this.props.name}</Text>
             </Appbar.Header>
        );
        }
  };

  const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9f9'
      }
  })