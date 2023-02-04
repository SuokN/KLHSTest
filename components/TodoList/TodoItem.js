import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";
import {useDispatch } from "react-redux";
import {deleteTodo, updateTodo} from "../../actions/todos";

const TodoItem = ({id, text, isReady}) => {
    const dispatch = useDispatch()

    const itemReady = (value) =>{
        dispatch(updateTodo({id: id, text: text, isReady: value}))
    }
    const onDelete = () => {
        dispatch(deleteTodo({id}))
    }
    return (
    <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isReady} onValueChange={itemReady} />
        <Text style={isReady ? styles.paragraphReady : styles.paragraph}>{text}</Text>
        <TouchableOpacity onPress={onDelete}
                          style={styles.buttonFacebookStyle}
                          activeOpacity={0.5}>
            <Image source={require('../images/delete.png')}
                   style={styles.buttonImageIconStyle}/>

        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: 'auto',
        margin: 5,
    },
    paragraph: {
        fontSize: 15,
        flexBasis: 'auto',
        flexShrink: 10,
        width: "80%",
    },
    paragraphReady: {
        fontSize: 15,
        flexBasis: 'auto',
        flexShrink: 1,
        textDecorationLine: 'line-through',
        width: "80%",
    },
    checkbox: {
        alignSelf: 'center',
        padding: 10,
        margin: 5,
    },
    buttonImageIconStyle: {
    padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
});
export default TodoItem