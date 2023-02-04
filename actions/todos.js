import {DELETE_TODO, ADD_TODO, GET_TODOS, UPDATE_TODO} from '../constants/actionConstants';

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export function addTodo(data) {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export function getTodos() {
    return {
        type: GET_TODOS,
        payload: null
    }
}

export function updateTodo(data) {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}