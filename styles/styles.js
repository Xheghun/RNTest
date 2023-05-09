import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },

    inputContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#311b6b"
    },

    goalsContainer: {
        flex: 6,
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: '100%',
        padding: 6,
        color: "#120438",
        borderRadius: 6,
        padding: 16
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
    },

    modalButtonBarStyle: {
        flexDirection: "row",
        marginTop: 16

    },

    modalButton: {
        width: "25%",
        marginHorizontal: 8
    },

    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});