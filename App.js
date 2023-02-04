import Tabs from "./Tabs"
import {configureStore} from "@reduxjs/toolkit"
import {todosReducer} from "./reducers/todosReducer";
import {settingsReducer} from "./reducers/settingsReducer";
import {Provider} from "react-redux";
import { combineReducers } from 'redux'

const reducer = combineReducers({
    todos: todosReducer,
    settings: settingsReducer,
})

const App = () => {
    const store = configureStore({reducer,});

    return (
        <Provider store={store}>
            <Tabs />
        </Provider>
    )
}
export default App;