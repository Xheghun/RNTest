import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1
    },

    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },

    goalsContainer: {
        flex: 6,
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: '75%',
        marginRight: 8,
        padding: 6
    },


    listItemContainer: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },

    listItem: {
        color: "white"
    },

    pressedItem: {
        opacity: 0.6
    }
});