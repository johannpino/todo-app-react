export const REMOVE_TODO = 'REMOVE_TODO'
export const ADD_TODO = 'ADD_TODO'


export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const removeTodo = payload => {
    return {
        type: REMOVE_TODO,
        payload
    }
}
