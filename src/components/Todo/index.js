import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {

    
    handleDelete = i => {
        if(window.confirm('Are you sure you want to delete it?')){
            this.props.onRemoveTodo(i)
        }
    }

    
    render() {
        // console.log(this.props.todo)
        const todos = this.props.todo.map((todo, i) =>{
            const {title,description,priority,responsible} = todo
            return(
                <div className="col-4 mt-2"  key={i}>
                    <div className="card text-center" >
                        <div className="card-header">
                            <h3>{title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {priority}
                            </span>
                        </div>
                        <div className="card-body" >
                            <p>{description}</p>
                            <p><mark>{responsible}</mark></p>
                        </div>
                        <div className="card-footer" >
                            <button className="btn btn-danger" onClick={this.handleDelete.bind(this,i)} >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="container" >
                    <div className="row mt-4">
                        {todos}
                    </div>
                </div>
                
            </div>
        );
    }
}

Todo.propTypes = {
    todo: PropTypes.array.isRequired,
};

export default Todo;