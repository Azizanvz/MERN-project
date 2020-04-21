import React, {Component} from 'react';
import axios from 'axios';

class CreateTodo extends Component {

    constructor(){

        super();

        this.state = ({
            description : '',
            responsible : '',
            priority : '',
            isCompleted : false
        });
        
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
       
        const newTodo = {
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            isCompleted: this.state.isCompleted
        }

        const response = await axios.post('http://localhost:4000/todos/create', newTodo);
        
        console.log(response.data);
            
        
        this.setState({
            description : '',
            responsible : '',
            priority : '',
            isCompleted : false
        });
    }

    render(){
        
        return (
            <div className="container">
                <h3>Create a New Todo</h3>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                                className="form-control" 
                                value={this.state.description}
                                onChange={(e)=> this.setState({description : e.target.value})}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                                className="form-control" 
                                value={this.state.responsible}
                                onChange={(e)=> this.setState({responsible : e.target.value})}
                                />
                    </div>
                    <div className="form-group">
                        
                        <div className="form-check form-check-inline">                        
                            <input type="radio" 
                                className="form-check-input" 
                                value="Low"
                                checked={this.state.priority === "Low"}
                                onChange={e => this.setState({priority : e.target.value})} />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                className="form-check-input" 
                                value="Medium"
                                checked={this.state.priority === "Medium"}
                                onChange={e => this.setState({priority : e.target.value})} />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                className="form-check-input" 
                                value="High"
                                checked={this.state.priority === "High"}
                                onChange={e => this.setState({priority : e.target.value})} />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Todo" className="btn btn-primary"/>
                    </div>
                </form>
                    
                
                
            </div>
        )
    }
}

export default CreateTodo;