import {GET_SETTINGS, SAVE_SETTINGS} from '../constants/actionConstants';
import {Push, SMS, Email} from "../constants/commonConstants";

const initialState = {
    items: [
        {id: 1, text: SMS, isChecked: true},
        {id: 2, text: Push, isChecked: false},
        {id: 3, text: Email, isChecked: false},
    ]
}

const redFunctions = {
    [GET_SETTINGS]: s => s,
    [SAVE_SETTINGS]: (state, action) => ({
        items: [
            ...state.items.filter(item => item.id !== action.payload.id),
            action.payload,
        ].sort((a, b) => a.id - b.id)
    })
}

export const settingsReducer = (state = initialState, action) => {
    const f = redFunctions[action.type];
    return !!f ? f(state, action) : state;
}