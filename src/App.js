import './App.css';
import React, { useState, useEffect} from "react";

// Import components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  
  // State stuff
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  console.log(input);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, status])
  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Your ToDo List</h1>
      </header>

      <Form input={input} todos={todos} setTodos={setTodos} setInput={setInput} setStatus={setStatus} filtered={filtered}/>
      <ToDoList todos={todos} setTodos={setTodos} filtered={filtered}/>
    </div>
  );
}

export default App;
