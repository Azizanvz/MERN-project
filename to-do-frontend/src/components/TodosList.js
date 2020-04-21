import React, {Component} from 'react';
import axios from 'axios';
import Todo from './Todo';

class TodosList extends Component{

    constructor(props){
        super();

        this.state = {todos: []};
    }

    componentDidMount(){

        axios.get('http://localhost:4000/todos')
            .then(response => {
                //console.log(response.data);
                this.setState({todos: response.data});
               
            })
            .catch(function(err){
                console.log(err);
            });

    }

    componentDidUpdate(){

        axios.get('http://localhost:4000/todos')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(err){
                //console.log(err);
            });

    }

    showTodos(){
        
    }

    render(){
        return(
            <div>
                <h3>Todos List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo, index) => {
                            return (<Todo todo={todo} />)
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default TodosList;