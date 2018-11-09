import { REMOVE_TODO, ADD_TODO } from "../actions";


export const reducer = (state = {},action) =>{
    switch (action.type) {
        case ADD_TODO:
            // console.log(action.payload);
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }    
            case REMOVE_TODO:
            // console.log(action.payload);
            return {
                ...state,
                todos: state.todos.filter((todo, id) => {
                    return id !== action.payload
                } )
            }  
        default:
        return state
    }
}