//todos actions
import {DELETE_TODO, ADD_TODO, GET_TODOS, UPDATE_TODO} from '../constants/actionConstants';

// delete to do by id
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}
// add to do
export function addTodo(data) {
    return {
        type: ADD_TODO,
        payload: data
    }
}
//get all todos
export function getTodos() {
    return {
        type: GET_TODOS,
        payload: null
    }
}
//update to do
export function updateTodo(data) {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}