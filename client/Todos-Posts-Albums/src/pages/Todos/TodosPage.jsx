import React, { useState, useEffect, useContext } from 'react';
import TodoList from '../../components/Todos/TodosList'; 
import { Spinner } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData';
import { UserContext } from '../../App';

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

    return (
        <main>
            <div>
                <h1>This is what you have to do!</h1>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <TodoList todos={todos} />
            )}
        </main>
    );
};

export default TodosPage;
