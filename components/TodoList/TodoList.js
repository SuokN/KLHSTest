import {Text, View, TextInput, TouchableOpacity, Image, StyleSheet} from "react-native";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [list, setList] = React.useState([])
    const onPress = () => {
        console.log("lists " + list.length)
        setList([...list, text])};

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text>Add new</Text>
            <TouchableOpacity onPress={onPress}
                style={styles.buttonFacebookStyle}
                activeOpacity={0.5}>
                <Image source={require('../images/plus.png')}
                     style={styles.buttonImageIconStyle}/>

            </TouchableOpacity>
            <View style={styles.buttonIconSeparatorStyle} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            {list.map((child, index) => {
               return  <TodoItem key={index}/> })}

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        alignSelf: 'center',
        backgroundColor: '#485a96',
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});

export default TodoList