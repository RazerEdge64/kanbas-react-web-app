import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({ todo,
 }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between">

      {todo.title}
        <div>
            <button className="btn btn-primary mx-1" onClick={() => dispatch(setTodo(todo))}> Edit </button>

            <button className="btn btn-danger mx-1" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>

        </div>

    </li>
  );
}
export default TodoItem;