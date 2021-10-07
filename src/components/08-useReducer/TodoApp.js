import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

import './todoApp.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

// create Array 
const initialState = [];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    
    //console.log(formValues);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId

        }
        dispatch( action );
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => { 
        dispatch( {
            type: 'add',
            payload: newTodo
        } );

    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h1>Todo-App ({todos.length})</h1>
                    <hr/>
                    <TodoAdd handleAddTodo= {handleAddTodo} />

                    <TodoList 
                            todos = { todos }
                            handleDelete = { handleDelete }
                            handleToggle = { handleToggle }
                    />
                </div>
            </div>
        </div>
    )
}
