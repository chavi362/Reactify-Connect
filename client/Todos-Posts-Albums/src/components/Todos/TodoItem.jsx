import React from 'react';

const TodoItem = ({ id, title, completed }) => {
    const handleDeleteClick = () => {
        // Handle delete click logic
    };

    const handleCheckboxClick = () => {
        // Handle checkbox click logic
    };

    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center'>
                    <input
                        type='checkbox'
                        className='mr-3'
                        checked={completed}
                        onChange={handleCheckboxClick}
                    />
                    {title}
                </span>
                <button onClick={handleDeleteClick} className='btn btn-danger'>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
