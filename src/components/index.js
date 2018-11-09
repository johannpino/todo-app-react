import React from 'react';
import Navigation from './Navigation';
import Todo from './Todo'
import TodoForm from './TodoForm';

const App = () => {
    return (
        <div>
           <Navigation title="Todo-App"/>
           <div className="d-inline-block col-md-4 col-sm-12">
                <TodoForm />
           </div>
           <div className="d-inline-block col-md-8 col-sm-12">
                <Todo/>
           </div>
           <div className="footer text-center">
                <p>Johann Pino --- Todo-App with React & Redux </p>
            </div>     
        </div>
    );
};

export default App;