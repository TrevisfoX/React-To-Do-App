import React from 'react';
import "./style.scss";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({todo, editTodo, removeTodo}) => {

    const handleChange = () => {
        todo.completed = !todo.completed;
        editTodo(todo);
    };

    const handleDelete = () => {
        removeTodo(todo.id);
    };

    return (
        <li className='item'>
            <input type="checkbox" checked = {todo.completed} onChange={handleChange}/>
            <p className={`${todo.completed ? "completed" : ""}`}>{todo.title}</p>   
            <Stack>
                <IconButton aria-label="delete">
                    <DeleteIcon  className='btn-del' onClick={handleDelete}/>
                </IconButton>
            </Stack>
            {/* <div className='btn-del' onClick={handleDelete}>x</div> */}
        </li>
    )
}

export default TodoItem;


