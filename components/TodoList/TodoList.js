import { View, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux"
import {addTodo } from "../../actions/todos";

const TodoList = () => {
    const [count, setCount] = React.useState(0)

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.items)

    const [text, onChangeText] = React.useState('TODO: ');
    const onPress = () => {
        const unChecked = false
        dispatch(addTodo({id: count, text: text, isReady: unChecked}))
        setCount(prevCount => prevCount + 1)
       };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
             <View style={styles.section}>
            <TouchableOpacity onPress={onPress}
                style={styles.button}
                activeOpacity={0.5}>
                <Image source={require('../images/plus.png')}
                     style={styles.buttonImageIconStyle}/>

            </TouchableOpacity>
            <View style={styles.buttonIconSeparatorStyle} />
            <TextInput editable multiline numberOfLines={4}
                maxLength={300}
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            </View>
            <View >
                {todos.map((child, index) => {
                return  <TodoItem key={index} id={child.id} text={child.text} isReady={child.isReady} /> })}
            </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    scrollView: {
        marginHorizontal: 10,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: "80%",
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    paragraph: {
        fontSize: 15,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});

export default TodoList