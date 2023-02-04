import {UPDATE_TODO, GET_TODOS, ADD_TODO, DELETE_TODO} from '../constants/actionConstants';

const initialState = {
    items: [],
}

const redFunctions = {
    [GET_TODOS]: s => s,
    [UPDATE_TODO]: (state, action) => ({
        items: [
            ...state.items.filter(item => item.id !== action.payload.id),
            action.payload,
        ].sort((a,b) => a.id - b.id)
    }),
    [ADD_TODO]: (state, action) => ({
        ...state,
        items: [...state.items, action.payload]
    }),
    [DELETE_TODO]: (state, action) => ({
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
    })
}

export const todosReducer = (state = initialState, action) => {
    const f = redFunctions[action.type];
    return !!f ? f(state, action) : state;
}
