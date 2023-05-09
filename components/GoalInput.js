import { TextInput, View, Button, Modal, Image } from "react-native"
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
        props.onCancelPressed()
    }

return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require("../assets/goal.png")} />
            <TextInput value={enteredGoalText} style={styles.textInput} placeholder={props.hint} onChangeText={goalInputHandler} />

            <View style={styles.modalButtonBarStyle}>
                <View style={styles.modalButton}>
                    <Button title="Cancel" onPress={props.onCancelPressed} color="#f31282" />
                </View>
                <View style={styles.modalButton}>
                    <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
                </View>
            </View>
        </View>
    </Modal>
    );




}

export default GoalInput