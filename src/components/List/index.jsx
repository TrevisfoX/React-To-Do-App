import React from "react";
import TodoItem from "../Item";
import "./style.scss";

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
