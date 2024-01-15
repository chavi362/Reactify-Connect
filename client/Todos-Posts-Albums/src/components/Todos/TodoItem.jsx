import React, { useState } from 'react';
import { FaTrashAlt,FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleCheckboxClick = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleUpdateButton = () => {
    setEditing(true);
  };

  const handleSaveButton = () => {
    updateTodo({ ...todo, title: updatedTitle });
    setEditing(false);
  };

  const handleCancelUpdate = () => {
    setUpdatedTitle(todo.title);
    setEditing(false);
  };

  return (
    <li className={`list-group-item ${todo.completed && 'list-group-item-success'}`}>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input
            type='checkbox'
            className='mr-3'
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          {isEditing ? (
            <input
              type='text'
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          ) : (
            <span>{todo.title}</span>
          )}
        </span>
        <div>
          {isEditing ? (
            <>
              <button onClick={handleSaveButton}>Save</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={deleteTodo}>
                <FaTrashAlt />
              </button>
              <button onClick={handleUpdateButton}><FaEdit/></button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
