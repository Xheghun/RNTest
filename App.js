
import { Button, Text, TextInput, View, ScrollView } from 'react-native';

import { styles } from './styles/styles.js'

import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalInput() {
    setCourseGoals(currentGoals =>  [...currentGoals, enteredGoalText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalInput} />
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView>
        <Text>List of Goals..</Text>
        {courseGoals.map((goal) =>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem} key={goal}>{goal}</Text>
        </View>
        )}
      </ScrollView>
      </View>
    </View>
  );
}

