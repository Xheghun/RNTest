
import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './styles/styles.js'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course goal'/>
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of Goals..</Text>
      </View>
    </View>
  );
}

