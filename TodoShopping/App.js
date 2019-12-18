
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,Alert, TouchableWithoutFeedback,Keyboard
} from 'react-native';
import Header from './components/header';
import Todoitem from './components/todoitem';
import Addtodo from './components/addtodo';
import Sandbox from './components/sanbox';


export default function App(){

  const [todos,setTodos]=useState([
    {text:'Buy Coffee',key:'1'},
    {text:'Create an App',key:'2'},
    {text:'Play Cricket',key:'3'}
  ])

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
        return prevTodos.filter(todo => todo.key!= key)
    })
  }
  const submiHandler = (text) =>{
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return [
         
          {text:text,key: Math.random().toString()},
          ...prevTodos
        ];
      })
    }else{
      Alert.alert('OOPS!','Todos must be over 3 Chars long',[{
        text: "Understood", onPress: ()=> console.log('alert closed')
      }]);
    }
    }
  return (
    
     <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      }}>
    <View style={styles.container}>
      <Header />
     <View style={styles.content}>
       <Addtodo submiHandler={submiHandler}/>
       <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({item})=>(
            <Todoitem item={item} pressHandler={pressHandler}/>
          )}
          />
     </View>

     </View>

    </View>
    </TouchableWithoutFeedback> 
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  content:{
    padding:40,
    flex:1,
    
  },
  list:{
    marginTop:20,
    flex:1,
    
  }
});


