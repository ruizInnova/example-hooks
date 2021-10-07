import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './todoApp.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    /*
    return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];
    */
}

// create Array 
const initialState = [];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const [{description}, handleInputChange, reset] = useForm( {
        description: ''
    })
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
        reset();
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('new task..');
        if(description.trim().length <= 4){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }   

        const action = {
            type: 'add',
            payload: newTodo

        }

        dispatch( action );
        reset();

    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h1>Todo-App ({todos.length})</h1>
                    <hr/>
                    <form onSubmit = {handleSubmit} >
                        <div className="mb-3">
                            <label className="form-label">Pending task</label>
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                placeholder="Activity ..."
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={description}
                            />
                            
                            <div id="emailHelp" className="form-text">Write the task you will be working with</div>
                            
                            
                        </div>
                    </form>

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li
                                key = { todo.id }
                                className="list-group-item"
                                >
                                <p
                                    className={ `${ todo.done && 'complete' }` }
                                    onClick = { () =>handleToggle(todo.id) }
                                >
                                    { i + 1 }.- { todo.desc }
                                </p>
                                <button onClick={ () =>handleDelete(todo.id) } type="button" className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                </li>

                        ))
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
