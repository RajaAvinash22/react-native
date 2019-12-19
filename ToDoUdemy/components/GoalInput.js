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
  Modal,
} from 'react-native';

const GoalInput = props => {

  const [enterGoals, setGoals] = useState('');
  const InputGoal = (text) => {
    setGoals(text);
  }
  const addGoalHAndler = () => {
    props.toAdd(enterGoals);
    setGoals('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Course Goal'
          onChangeText={InputGoal}
          value={enterGoals}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHAndler} />
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  input: {
    width: '80%',
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
  },
  button:{
    width:"40%"
  }
})