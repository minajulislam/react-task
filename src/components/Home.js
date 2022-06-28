import React, { useState } from 'react';
import './Home.css';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from 'uuid';


import Todos from './Todos';



const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
       setTodos((prevTodos) => {
        return [...prevTodos, {id: uuidv4(), todo}]
       })
    }

    const handleRemoveTodo = (id) => {
        
        setTodos((prevTodos)=>{
            const filteredTodos = prevTodos.filter((todo) => todo.id !==id)
            return filteredTodos;
        });
    }

    return (
        <div className='container'>
            <h1 style={{color: 'white'}}>Your information</h1>
            <p style={{color: 'white'}}>You can delete unnecessary information</p>
            <NewTodo onAddTodo={handleAddTodo}></NewTodo>
           <Todos todos={todos} onRemoveTodo={handleRemoveTodo}></Todos>
        </div>
    );
};

export default Home;