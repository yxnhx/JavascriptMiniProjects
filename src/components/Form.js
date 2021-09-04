import React from 'react';

const Form = ({ setInput, todos, setTodos, input, setStatus }) => {
    // Here i can write js code and function
    const inputTextHandler = (e) => {
        setInput(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: input, completed: false, id: Math.random() * 1000},
        ]);
        input = "";
        setInput(input);
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
        <input value={input} onChange={inputTextHandler} type="text" className="todo-input" />
        <button className="todo-button" type="submit" onClick={submitTodoHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange= {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    );
};

export default Form;