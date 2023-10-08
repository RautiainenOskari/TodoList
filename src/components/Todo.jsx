// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Todo.css";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();


  const inputChanged = (event) => {
      setTodo({ ...todo, [event.target.name]: event.target.value });
    }


  const columns = [
    { field: "description", sortable: true, filter: true },
    { field: "date", sortable: true, filter: true },
    { field: "priority", sortable: true, filter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} }
    ];
  
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
    setTodos(todos.filter((todo, index) =>
    index != gridRef.current.getSelectedNodes()[0].id))
    }
    else {
    alert('Select row first');
    }
    };

    

  return (

    <div>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField
        label="Description"
        variant="standard"
        name="description" value={todo.description}
        onChange={inputChanged}/>
        <TextField
        label="Date"
        variant="standard"
        name="date"
        value={todo.date}
        onChange={inputChanged} />
        <TextField
        label="Priority"
        variant="standard"
        name="priority" value={todo.priority}
        onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      </Stack>
      <div className="ag-theme-material"
style={{height: '700px', width: '100%', margin: 'auto'}} >
<AgGridReact
  ref={gridRef}
  onGridReady={ params => gridRef.current = params.api }
  rowSelection="single"
  columnDefs={columns}
  rowData={todos}
  animateRows={true}
  defaultColDef={{
  floatingFilter: true
}}>
</AgGridReact>
</div>
  
    </div>
  );
}

export default Todolist;