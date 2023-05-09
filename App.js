
import { Text, View, FlatList, Button } from 'react-native';
import { styles } from './styles/styles.js'
import { useState } from 'react';
import  GoalItem  from './components/GoalItem'
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
import  {v4 as uuid} from 'uuid'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const [isModalVisible, setModalVisibility] = useState(false)

  function addGoalInput(enteredGoalText) {
    setCourseGoals(currentGoals =>  [...currentGoals, {text: enteredGoalText, id: uuid()}])
  }

  function startAddGoalHandler() {
    setModalVisibility(true)
  }

  function stopAddGoalHandler() {
    setModalVisibility(false)
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button  title='Add new Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
        <GoalInput hint='Enter your course goal boy' onCancelPressed={stopAddGoalHandler} onAddInput={addGoalInput} visible={isModalVisible}  />

        <View style={styles.goalsContainer}>
        <Text>List of Goals..</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          let goal = itemData.item.text
          console.log(itemData.item.id)
          return ( <GoalItem id={itemData.item.id} onDeleteItem={deleteGoalHandler} text={goal} /> );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}  alwaysBounceVertical={false}/>
        </View>
      </View>
    </>
  );
}

