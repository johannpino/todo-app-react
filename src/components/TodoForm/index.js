import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addTodo} from './../../redux/actions'

class TodoForm extends Component {

    handleSubmit = e => {
        e.preventDefault()      
        const dato = {
            title: e.target.title.value,
            description: e.target.description.value,
            responsible: e.target.responsible.value,
            priority: e.target.priority.value
        }

        if(e.target.title.value === ''){
            e.target.title.focus()
        }else if(e.target.responsible.value === ''){
            e.target.responsible.focus()
        }
        else if(e.target.description.value === ''){
            e.target.description.focus()
        }
        else{
            this.props.onAddTodo(dato)
            e.target.reset()
        }
        
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h3>Formulario</h3>
                    </div>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="title" className="form-control" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="responsible" className="form-control" placeholder="Responsible" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="description" className="form-control" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="priority">
                                <option value="low">
                                    Low
                                </option>
                                <option value="medium">
                                    Medium
                                </option>
                                <option value="high">
                                    High
                                </option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => (
    {
         onAddTodo: add => dispatch(addTodo(add))
    }
)

export default connect(null,mapDispatchToProps)(TodoForm);