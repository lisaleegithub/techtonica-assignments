import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './Component/Todo'

const App = () => {
  // Declare a new state variable, which we'll call "todo"
  const [todos, setTodos] = useState([
    { text: "Walk dog", isCompleted: false },
    { text: "Feed cat", isCompleted: false },
  ]);
  
  // completeTodo function
  const toggleTodo = (index) => {
    // use spread operator to grab the current list of items
    const newTodos = [...todos];
    // toggle isComplete
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    // setTodos to update that state.
    setTodos(newTodos);
  };

  // console.log(todos);
  
  return (
    <div className="app">
      <h2>My todos:</h2>
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  </div>
  );
};

export default App;

