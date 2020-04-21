import React from 'react';
import { Link } from 'react-router-dom';

const Todo = (props) => {

    const tdStyle = {
        textDecoration: 'line-through'
    }

    tdStyle.textDecoration = !props.todo.isCompleted &&  'none';

    return(
        <tr>
            <td style={tdStyle}>
                {props.todo.description}
            </td>
            <td style={tdStyle}>
                {props.todo.responsible}
            </td>
            <td style={tdStyle}>
                {props.todo.priority}
            </td>
            <td style={tdStyle}>
                <Link to={`/edit/${props.todo._id}`} >Edit</Link>
            </td>
        </tr>
    )
}

export default Todo;