
import { Button, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

import { styles } from './styles/styles.js'

import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalInput() {
    setCourseGoals(currentGoals =>  [...currentGoals, {text: enteredGoalText, key: Math.random.toString()}])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalInput} />
      </View>
      <View style={styles.goalsContainer}>
      <Text>List of Goals..</Text>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        let goal = itemData.item.text
        return (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItem}>{goal}</Text>
          </View>
        );
      }}  alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

