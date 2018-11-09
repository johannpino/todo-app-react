import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <h2 className="text-white" >{this.props.title}
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.todos.length}
                    </span>
                    </h2>
                    
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
         todos: state.todos
    }
 }
 

export default connect(mapStateToProps,null)(Navigation);