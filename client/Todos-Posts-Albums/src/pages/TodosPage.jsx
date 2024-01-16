import React, { useState, useEffect, useContext } from 'react';
import TodoList from '../components/Todos/TodosList';
import WithLoader from '../components/WithLoader';
import useGetData from '../hooks/useGetData';
import { UserContext } from '../App';
import api from '../Api';

const TodosPage = () => {
	const user = useContext(UserContext);
	const [todos, setTodos] = useState([]);
	const [data, error, loading, setLoading] = useGetData(`todos?userId=${user.id}`);
	useEffect(() => {
		if (error) {
			console.error('Error fetching todos:', error);
		} else if (data) {
			setTodos(data);
		}
	}, [data, error]);

	const addTodo = async (todoTitle) => {
		try {
			setLoading(true);
			const newTodo = {
				userId: user.id,
				title: todoTitle,
				completed: false,
			};
			const response = await api.post('/todos', newTodo);
			const addedTodo = response.data;
			console.log('Todo added successfully');
			setTodos((prevTodos) => [...prevTodos, addedTodo]);
		} catch (error) {
			console.error('Error adding todo:', error);
			console.log('Detailed error response:', error.response);
		} finally {
			setLoading(false);
		}
	};
	const deleteTodo = async (todoIdToDelete) => {
		try {
			setLoading(true)
			await api.delete(`/todos/${todoIdToDelete}`);
			setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoIdToDelete));
			console.log(`Deleted todo with ID ${todoIdToDelete}`);
		} catch (error) {
			console.error('Error deleting todo:', error);
		}
		finally {
			setLoading(false);
		}
	};
	const updateTodo = async (todoToUpdate) => {
		try {
			setLoading(true);
			await api.put(`/todos/${todoToUpdate.id}`, todoToUpdate);
			setTodos((prevTodos) =>
				prevTodos.map((todo) =>
					todo.id === todoToUpdate.id ? { ...todoToUpdate } : todo
				)
			);
			console.log(`Updated todo with ID ${todoToUpdate.id}`);
		} catch (error) {
			console.error('Error updating todo:', error);
		} finally {
			setLoading(false);
		}
	};
	const TodoListWithLoader = WithLoader(TodoList)
	return (
		<main>
			<div>
				<h1>This is what you have to do!</h1>
			</div>
			<TodoListWithLoader loading={loading} todos={todos} deleteTodo={deleteTodo} addTodo={addTodo} updateTodo={updateTodo} />
		</main>
	);
};

export default TodosPage;
