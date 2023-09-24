import React, {useState} from 'react';
import './App.css'
import Todotable from './components/Todolist'

function App() {
  const [todo, setTodo] = React.useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const removeList = (indexDelete) => {
  const newTable = todos.filter((_, index) => index !== indexDelete);
  setTodos(newTable);
  };
  return (
    <div className='App'>
      <form onSubmit={addTodo}>
      <label>Date:</label>
        <input type='date' name="date" value={todo.date} onChange={inputChanged} />
        <label>Description:</label>
        
        <input type='text' name="desc" value={todo.desc} onChange={inputChanged} />
        <input type='submit' value ="Add" />
        
      </form>
      <Todotable todos={todos} removelist={removeList}/>
    </div>
  )
}

export default App
