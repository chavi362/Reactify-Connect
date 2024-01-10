import React from 'react';
import TodoItem from './TodoItem';
const TodoList = (props) => (
    <ul className='list-group'>
        {props.todos.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        ))}
    </ul>
);

export default TodoList;
