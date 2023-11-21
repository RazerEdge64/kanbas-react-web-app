import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);

    const API = "http://localhost:4000/a5/todos";

    const [todo, setTodo] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09", completed: false,
    });

    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get(API);
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };


    // const deleteTodo = async (todo) => {
    //     const response = await axios.delete(`${API}/${todo.id}`);
    //     setTodos(todos.filter((t) => t.id !== todo.id));
    // };

    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(
                `${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };



    const removeTodo = async (todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    // const updateTodo = async () => {
    //     const response = await axios.put(
    //         `${API}/${todo.id}`, todo);
    //     setTodos(todos.map((t) => (
    //         t.id === todo.id ? todo : t)));
    //     setTodo({});
    // };
    const updateTodo = async () => {
        try {
            const response = await axios.put(
                `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    }




    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Working with Arrays</h2>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />
            <a href={`${API}/${todo.id}`}
                className="btn btn-primary me-2">
                Get Todo by ID
            </a>

            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>

            <br />

            <button onClick={createTodo}
                className="btn btn-primary mb-2 w-100">
                Create Todo
            </button>

            <button onClick={updateTitle}
                className="btn btn-success mb-2 w-100">
                Update Title
            </button>
            <div className="form-group mb-3">
                <label htmlFor="todoId">ID</label>
                <input
                    id="todoId"
                    className="form-control"
                    value={todo.id}
                    onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                    type="number"
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="todoTitle">Title</label>
                <input
                    id="todoTitle"
                    className="form-control"
                    value={todo.title}
                    onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                    type="text"
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="todoDescription">Description</label>
                <textarea
                    id="todoDescription"
                    className="form-control"
                    value={todo.description}
                    onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="todoDueDate">Due Date</label>
                <input
                    id="todoDueDate"
                    className="form-control"
                    value={todo.due}
                    onChange={(e) => setTodo({ ...todo, due: e.target.value })}
                    type="date"
                />
            </div>

            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}

            <div className="form-group mb-3 form-check">
                <input
                    id="todoCompleted"
                    className="form-check-input"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
                />
                <label className="form-check-label" htmlFor="todoCompleted">
                    Completed
                </label>
            </div>

            <div className="form-group mb-3">
                <button
                    className="btn btn-primary mb-2"
                    onClick={postTodo}>
                    Post Todo
                </button>
                <button
                    className="btn btn-success"
                    onClick={updateTodo}>
                    Update Todo
                </button>
            </div>


            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="list-group-item">
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        <input
                            checked={todo.completed}
                            type="checkbox" readOnly
                        />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default WorkingWithArrays;