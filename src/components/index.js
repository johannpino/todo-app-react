import React, { Component } from 'react';
import Navigation from './Navigation';
import {todos} from './../todos.json'
import Todo from './Todo'
import TodoForm from './TodoForm';



class App extends Component {

    constructor(){
        super()
        this.state = {
            todos
        }
	}
	
	handleAddTodo = todo => {
		this.setState({
			todos: [...this.state.todos, todo]
		})
	}

	handleRemoveTodo = index => {		
        this.setState({
            todos: this.state.todos.filter( (e,i) => {
                return i !== index
            } )
        })
    }

    render() {

        return (
            <div>
               <Navigation title="Todo-App" todoLenght={this.state.todos.length} />
               <div className="d-inline-block col-4">
                	<TodoForm onAddTodo={this.handleAddTodo} />
               </div>
               <div className="d-inline-block col-8">
                    <Todo todo={this.state.todos} onRemoveTodo={this.handleRemoveTodo} />
               </div>
                
            </div>
        );
    }
}

export default App;