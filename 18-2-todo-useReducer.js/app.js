import React, { useEffect, useState, useReducer } from "react";

import "./styles/style.css";

const reducer = (state, target) => {
  if (target.type === 'SET_TODO_ARR') {
    return {todo:[...target.data], newTodoText: state.newTodoText};
  }else if ('SET_TODO_TEXT') {
    return {todo: state.todo, newTodoText: target.newTodoText};
  }else {
    return {todo:[], newTodoText: ''};
  }
}

function TodoList() {
  // const [todos, setTodos] = useState([]);
  // const [newTodoText, setNewTodoText] = useState("");

  const [todoState, dispatcher] = useReducer(reducer, {todo:[], newTodoText: ''});

  useEffect(() => {
    const data = localStorage.getItem("todo");
    if (data) {
      //setTodos(JSON.parse(data));
      dispatcher({type: 'SET_TODO_ARR', data: JSON.parse(data)});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoState.todo));
  }, [todoState.todo]);

  const addTodo = () => {
    //setTodos((todos) => [...todos, { id: Date.now(), text: newTodoText }]);
    //setNewTodoText("");
    dispatcher({type: 'SET_TODO_ARR', data: [...todoState.todo, { id: Date.now(), text: todoState.newTodoText }]})
    dispatcher({type: 'SET_TODO_TEXT', data: ''})
  };

  const handleNewTodoTextChange = (event) => {
    //setNewTodoText(event.target.value);
    dispatcher({type: 'SET_TODO_TEXT', newTodoText: event.target.value});
  };

  const handleDeleteTodo = (id) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatcher({type: 'SET_TODO_ARR', data: todoState.todo.filter((todo) => todo.id !== id)})
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          value={todoState.newTodoText}
          onChange={handleNewTodoTextChange}
          placeholder="Enter new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todoState.todo.map((todo) => (
          <li key={todo.id} onClick={() => handleDeleteTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;