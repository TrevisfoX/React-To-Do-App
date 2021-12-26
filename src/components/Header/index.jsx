import React, { useRef } from 'react';
import "./style.scss";
import Button from '@mui/material/Button';

const TodoHeader = ({addTodo}) => {
    const inputRef = useRef(null);

    const createTodo = (event) => {
        event.preventDefault();

        const todoObj = {
            id: new Date().getTime(),
            title: inputRef.current.value,
            completed: false,
        };

        addTodo(todoObj);

        inputRef.current.value = "";
    };

    return (
        <div className='header-wrapper'>
            <h1 className='app-title'>Create your checklist</h1>
            <form onSubmit={createTodo} className='form'>
                <input ref = {inputRef} className='input' type="text" />
                <Button variant="contained" className='btn' type='submit'>Add</Button>
            </form>
        </div>
    )
}

export default TodoHeader;
