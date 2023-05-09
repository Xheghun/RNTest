import { TextInput, View, Button } from "react-native"
import { styles } from "../styles/styles.js"
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoal] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddInput(enteredGoalText)
        setEnteredGoal("")
    }

return (<View style={styles.inputContainer}>
    <TextInput value={enteredGoalText} style={styles.textInput} placeholder={props.hint} onChangeText={goalInputHandler} />
    <Button title='Add Goal' onPress={addGoalHandler} />
</View>
);




}

export default GoalInput