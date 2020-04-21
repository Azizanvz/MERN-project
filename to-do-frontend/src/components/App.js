import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import TodosList from './TodosList';
import EditTodo from './EditTodo';
import CreateTodo from './CreateTodo';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">MERN-stack Todo App</Link>
                        <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Todos <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create Todo</Link>
                            </li>
    </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={TodosList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                </div>
            </Router>
        )
    }
}

export default App;