import React, { useState, useEffect, useContext } from 'react';
import TodoList from '../../components/Todos/TodosList';
import { Spinner } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData';
import { UserContext } from '../../App';
import api from "../Api";

const TodosPage = () => {
	const user = useContext(UserContext);
	const [todos, setTodos] = useState([]);
	const [data, error, loading] = useGetData(`todos?userId=${user.id}`);

	useEffect(() => {
		if (error) {
			console.error('Error fetching todos:', error);
		} else if (data) {
			setTodos(data);
		}
	}, [data, error, loading]);
	
    const deleteTodo = async (todoIdToDelete) => {
        try {
            // Make a DELETE request to delete the specified todo
            await api.delete(`/todos/${todoIdToDelete}`);
            
            // Update the local state to reflect the deletion
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoIdToDelete));

            console.log(`Deleted todo with ID ${todoIdToDelete}`);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };
return (
	<main>
		<div>
			<h1>This is what you have to do!</h1>
		</div>
		{loading ? (
			<Spinner />
		) : (
			<TodoList todos={todos} deleteTodo={deleteTodo}  />
		)}
	</main>
);
};

export default TodosPage;
