import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { removeTodo } from '../../redux/actions';

class Todo extends Component {

    
    handleDelete = id => {
        if(window.confirm('Are you sure you want to delete it?')){
            this.props.removeTodo(id)
        }
    }

    
    render() {
        const result = this.props.todos.map((todo, id) =>{
            const {title,priority,description,responsible} = todo
            return(
                <div className="col-md-4 col-sm-6 col-xs-12 mt-2 mb-5"  key={id}>
                    <div className="card text-center" >
                        <div className="card-header">
                            <h3>{title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                { priority}
                            </span>
                        </div>
                        <div className="card-body" >
                            <p>{ description}</p>
                            <p><mark>{ responsible}</mark></p>
                        </div>
                        <div className="card-footer" >
                            <button className="btn btn-danger" onClick={this.handleDelete.bind(this,id)} >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="row mt-4">
                    {result}
                </div>
            </div>
        );
    }
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
         todos: state.todos
    }    
 }

const mapDispatchToProps = dispatch => (
    {
        removeTodo: value => dispatch(removeTodo(value))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Todo);