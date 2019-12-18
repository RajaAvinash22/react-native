import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';



export default function Header(){

    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:5,
        backgroundColor:'coral',
        justifyContent:'center'
    },
    title:{
        fontSize:30,
        textAlign:'center',
        color:'#fff',
        fontWeight: 'bold'

    }

   
  });
  