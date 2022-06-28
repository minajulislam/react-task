import React from 'react';
import Todo from './Todo';
import './Todos.css';

const Todos = (props) => {
    return (
        <section className="todos">
            
     {

        props.todos.map(todo => <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveItem={props.onRemoveTodo}></Todo>)
     } 

        </section>
    );
};

export default Todos;