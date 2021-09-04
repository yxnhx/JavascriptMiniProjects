import React from 'react';
// import components
import Todo from './Todo';

const ToDoList = ({ todos, setTodos, filtered }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtered.map((todo) => (
                    <Todo key= {todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;

