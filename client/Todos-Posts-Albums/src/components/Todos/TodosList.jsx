import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const TodoList = (props) => {

    const [filter, setFilter] = useState('sequential');
    const [searchTerm, setSearchTerm] = useState('');
    const [order, setOrder] = useState('sequential');
    const orderOptions = [
        { value: 'sequential', label: 'Sequential' },
        { value: 'completed', label: 'Completed' },
        { value: 'uncompleted', label: 'Uncompleted' },
        { value: 'alphabetical', label: 'Alphabetical' },
        { value: 'random', label: 'Random' },
    ];
    const sortTodos = (todos, order) => {
        switch (order) {
            case 'sequential':
                return todos;
            case 'completed':
                return todos.sort((a, b) => (a.completed ? -1 : 1));
            case 'uncompleted':
                return todos.sort((a, b) => (a.completed ? 1 : -1));
            case 'alphabetical':
                return todos.sort((a, b) => a.title.localeCompare(b.title));
            case 'random':
                return todos.sort(() => Math.random() - 0.5);
            default:
                return todos;
        }
    };


    const filterTodos = (todos) => {
        switch (filter) {
            case 'sequential':
                return todos;
            case 'completed':
                return todos.filter((todo) => todo.completed);
            case 'uncompleted':
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    };
    const searchTodos = (todos) => {
        return todos.filter((todo) => {
            return (
                todo.id.toString().includes(searchTerm) ||
                todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                todo.completed.toString().includes(searchTerm.toLowerCase())
            );
        });
    };

    const filteredTodos = searchTodos(filterTodos(props.todos));
    const orderedTodos = sortTodos(filteredTodos, order);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <br></br>
                    <label className="mb-2">
                        Filter by:
                        <select
                            className="form-select"
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="sequential">Sequential</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </label>
                    <label className="mb-2" htmlFor="search"></label>
                    Search:
                    <input
                        id="search"
                        type="text"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <br></br><br></br>
                    <h4>order by:</h4>
                    <label className="mb-2" htmlFor="orderSelect"></label>
                    <select
                        className="form-select"
                        onChange={(e) => setOrder(e.target.value)}
                        value={order}
                        id="orderSelect"
                    >
                        {orderOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-9">
                    <AddTodoForm addTodo={props.addTodo} />
                    <ul className="list-group">
                        {orderedTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={{ ...todo }}
                                deleteTodo={() => props.deleteTodo(todo.id)}
                                updateTodo={props.updateTodo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
