import React, { memo } from 'react';

const TodoListItem = ({ 
    done = false, 
    handleTodoClick,
    id = -1,
    name = '', 
}) => (
    <li done={done.toString()} className='todoList_container'>
        <div className='todoListItem_value'>
            <span
                onClick={handleTodoClick}
                data-id={id}
                data-action='toggle'
                style={{ textDecorationLine: done ? 'line-through' : undefined }}
            >
                {name}
            </span>
        </div>
        <div 
            className='todoListItem_value_delete' 
            onClick={handleTodoClick} 
            data-id={id} 
            data-action='delete'
        />
    </li>
);

export default memo(TodoListItem);