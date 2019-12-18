import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-ionicons'


export default function Todoitem({item,pressHandler}){

    return(
        <View>
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                <View style={styles.item}>
                <Text >
                <Icon name='md-trash' size={30} />
                    {item.text}
                </Text>
                </View>
            </TouchableOpacity>
   
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})