import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
function TodoForm(
) {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between">
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
        <div>
            <button className="btn btn-warning mx-1" onClick={() => dispatch(updateTodo(todo))}> Update </button>
            <button className="btn btn-success mx-1" onClick={() => dispatch(addTodo(todo))}> Add </button>
        </div>


    </li>
  );
}
export default TodoForm;