import {SAVE_SETTINGS, GET_SETTINGS} from '../constants/actionConstants'


export function saveSettings(data) {
    return {
        type: SAVE_SETTINGS,
        payload: data
    }
}

export function getSettings() {
    return {
        type: GET_SETTINGS,
        payload: null
    }
}