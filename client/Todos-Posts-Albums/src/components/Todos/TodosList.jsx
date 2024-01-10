import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const TodoList = (props) => {
    debugger;
    const [filter, setFilter] = useState('sequential'); 
    const [searchTerm, setSearchTerm] = useState('');

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
    };ו
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

    return (
        <div>
            <div>
                <label>
                    Filter by:
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option value="sequential">Sequential</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </label>
                <label>
                    Search:
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
            </div>
            <AddTodoForm addTodo={props.addTodo}/>
            <ul className='list-group'>
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} deleteTodo={() => props.deleteTodo(todo.id)}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
