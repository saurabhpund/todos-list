import React from "react";
import TodoItem from "./TodoItem";
import NullList from "./NullList";

const Todos = (props) => {
  return (
    <div>
      <div className="container todoDiv">
        <h1 className="my-5 text-center">Todo List</h1>
        {props.todos.length === 0 ? (
          <NullList />
        ) : (
          props.todos.map((todo) => (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;
