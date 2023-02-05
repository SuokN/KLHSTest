//settinfgs action
import {SAVE_SETTINGS, GET_SETTINGS} from '../constants/actionConstants'

// update settings
export function saveSettings(data) {
    return {
        type: SAVE_SETTINGS,
        payload: data
    }
}
// get all settings
export function getSettings() {
    return {
        type: GET_SETTINGS,
        payload: null
    }
}