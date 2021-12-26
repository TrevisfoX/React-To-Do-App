import { useState, useEffect } from 'react';
import './App.scss';
import TodoHeader from './components/Header';
import TodoList from './components/List';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo.title) {
      return;
    }
    setTodos([...todos, newTodo]);       
  };

  const removeTodo = (todoId) => {
    const filteredTodos = todos.filter((item) => item.id !== todoId);
    setTodos(filteredTodos);
  };

  const editTodo = (updatedTodo) => {
    const newTodos = todos.map((itemTodo) => {
      if (itemTodo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return itemTodo;
      }
    });

    setTodos(newTodos);
  };

  useEffect(() => {
    if (todos.length) return;
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div className='wrappeer'>         
      <TodoHeader todos={todos} addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo}/>
     </div>
  );
}

export default App;
