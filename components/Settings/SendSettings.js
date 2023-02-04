import {StyleSheet, Text, View} from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveSettings} from "../../actions/settings";

const SendSettings = ()  => {

    const dispatch = useDispatch()
    const settings = useSelector(state => state.settings.items)

    const handleChange = (id, text, isChecked) => {
        dispatch(saveSettings({id: id, text: text, isChecked: !isChecked}))
    };

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            {settings.map((item, index) => {
                return <View key={index + 10}
                    style={{
                        flexDirection: 'row',
                    }}>
                    <Checkbox style={styles.checkbox} key={index +20}
                        value={item.isChecked}
                              onValueChange={() => {
                            handleChange(item.id, item.text, item.isChecked);
                        }}
                    />
                    <Text key={index} style={styles.paragraph}>{item.text}</Text>
                </View>
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    paragraph: {
        fontSize: 15,
        padding: 10,
    },
    checkbox: {
        alignSelf: 'center',
        padding: 10,
        margin: 5,
    },
});
export default SendSettings