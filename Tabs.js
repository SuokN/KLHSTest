import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodoList from "./components/TodoList/TodoList";
import SendSettings from "./components/Settings/SendSettings";
import { TODOS, Settings } from "./constants/commonConstants";
import { useSelector} from "react-redux";


const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Tabs() {
    const todos = useSelector(state => state.todos.items)

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name ===  TODOS) {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === Settings) {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                       return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#485a96',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name={TODOS} component={TodoList}  options={{ tabBarBadge: todos.length }} />
                <Tab.Screen name={Settings} component={SendSettings}   />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


