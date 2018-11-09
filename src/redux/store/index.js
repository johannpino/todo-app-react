import {createStore} from 'redux'
import { reducer } from '../redurces';
import {todos} from './../../todos.json'

const initializers = {
    todos
}

export const store = createStore(reducer, initializers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

