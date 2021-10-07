import React from 'react'
import { useForm } from '../../../hooks/useForm';


export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm( {
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('new task..');

        if(description.trim().length <= 4){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };   

        handleAddTodo( newTodo );
        reset();

    }

    return (
        <>
            
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
        </>
    )
}
