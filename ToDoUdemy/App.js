
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  Alert
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {

  const [addGoals, setaddGoals] = useState([]);
  const [isAddMode,setMode] = useState(false);

  const toAdd = (text) => {
    if (text.length >3){
      setaddGoals((prevGoals) => [...prevGoals, { id: Math.random().toString(), value: text }]);
      setMode(false);
    }else {
      Alert.alert('OOPS!',"Course must be 3 Characters long",[{
        text:"Understood",onPress:()=>console.log('alert closed')
      }])
    }
    
  };
const removeGoal = (id)=>{
  setaddGoals(prevGoals =>{
    return prevGoals.filter(goal=>
      goal.id !== id
    );
  });
}
const cancelGoal =()=>{
  setMode(false);
}

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={()=>setMode(true)} />
      <GoalInput visible={isAddMode} toAdd = {toAdd} onCancel={cancelGoal}/>
      <FlatList
        data={addGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GoalItem id={item.id} onDelete={removeGoal} item = {item.value} />} >

      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1

  },
});

export default App;
