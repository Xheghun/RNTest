
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles/styles.js'
import { useState } from 'react';
import  GoalItem  from './components/GoalItem'
import GoalInput from './components/GoalInput';
import  {v4 as uuid} from 'uuid'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])


  function addGoalInput(enteredGoalText) {
    setCourseGoals(currentGoals =>  [...currentGoals, {text: enteredGoalText, id: uuid()}])
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput hint='Enter your course goal boy' onAddInput={addGoalInput}  />
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
  );
}

