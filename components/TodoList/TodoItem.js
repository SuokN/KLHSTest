import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";

const TodoItem = () => {
    const [isSelected, setSelection] = React.useState(false);
    const [paragrafStyle, setParagrafStyle] = React.useState(styles.paragraph);
    const itemReady = (value) =>{
        setSelection(value)
        if (value) setParagrafStyle(styles.paragraphReady)
        else setParagrafStyle(styles.paragraph)
    }
    return (
    <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isSelected} onValueChange={itemReady} />
        <Text style={paragrafStyle}>Normal checkbox</Text>
        <TouchableOpacity
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
    },
    paragraph: {
        fontSize: 15,
    },
    paragraphReady: {
        fontSize: 15,
        textDecorationLine: 'line-through'
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
});
export default TodoItem