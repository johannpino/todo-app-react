import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoForm extends Component {

    constructor(){
        super()
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
    }

    handleInput = e => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddTodo(this.state)
        console.log('enviando datos');
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
                            <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="responsible" onChange={this.handleInput} className="form-control" placeholder="Responsible" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="priority" onChange={this.handleInput}>
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

};

export default TodoForm;