import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <h2 className="text-white" >{this.props.title}
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.todoLenght}
                    </span>
                    </h2>
                    
                </nav>
            </div>
        );
    }
}

export default Navigation;