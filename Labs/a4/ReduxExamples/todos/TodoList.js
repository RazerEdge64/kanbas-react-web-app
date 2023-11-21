import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoList() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <h2>Todo List</h2>
        <div style={{width:"400px"}}>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo) => (
                    <TodoItem todo={todo} />
                ))}
            </ul>
        </div>

    </div>
  );
}
export default TodoList;
