import { styles } from '../styles/styles.js'
import {Text, View, Pressable} from 'react-native'

function GoalItem(props) {

    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.listItemContainer}>
                <Text style={styles.listItem}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem