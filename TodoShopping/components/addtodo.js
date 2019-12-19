import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default function Addtodo({submiHandler}){
const [text,setText]=useState('');

const changeHandler = (val)=>{
    setText(val);
}

    return(
        <View >
            <TextInput style={styles.input}
            placeholder='new Todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={()=>submiHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({

    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'

    }
})