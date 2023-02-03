import {Text, View} from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";

const SendSettings = ()  => {
    const data = [
        { id: 1, text: 'SMS', isChecked: false },
        { id: 2, text: 'Push', isChecked: false },
        { id: 3, text: 'Email', isChecked: false },
    ]
    const [settingsData, setSend] = React.useState(data);

    const handleChange = (id) => {
        console.log(settingsData)
        const temp = settingsData.map((item) => {
            if (id === item.id) {
                return {...item, isChecked: !item.isChecked }
            }
            return item;
        });
        console.log(temp)
        setSend(temp);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            {settingsData.map((item, index) => {
                return <View key={index + 10}
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-between',
                    }}>
                    <Checkbox key={index +20}
                        value={item.isChecked}
                              onValueChange={() => {
                            console.log(item)
                            handleChange(item.id);
                        }}
                    />
                    <Text key={index}>{item.text}</Text>
                </View>
            })}
        </View>
    );
}
export default SendSettings