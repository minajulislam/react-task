import React, { useState } from 'react';
import "./NewTodo.css";

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title: '', desc: ''});
    const {title, desc} = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: "", desc: "",});
        
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
           <div className="form-field">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" onChange={handleChange} value={title} placeholder="write title"/>
           </div>
           <div className="form-field">
            <label htmlFor="desc">Desc:</label>
            <textarea type="text" id="desc" name="desc" value={desc}  onChange={handleChange} placeholder="Description about your own title"/>
           </div>
           
           <button type="submit">Add Information</button>

        </form>
            
    );
};

export default NewTodo;