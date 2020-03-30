import React, { Fragment, useState, useEffect } from 'react';
import TodoListItem from './todoListItem.jsx';

const filterValues = [
    {
        label: 'ALL',
        value: 'all'
    },
    {
        label: 'COMPLETED',
        value: 'completed'
    },
    {
        label: 'PENDING',
        value: 'pending'
    }
];

const TodoList = ({ 
    deleteTodoListItem,
    todoList,
    toggleTodoListItem
}) => {
    const [filter, setFilter] = useState('all');
    const [list, setList] = useState(todoList);

    const handleTodoClick = ({ 
        target: {
            dataset: {
                action = '',
                id = -1
            } = {}
        } = {}
    }) => {
        if (action === '' || id === -1) {
            return;
        }
        action === 'toggle' ? toggleTodoListItem(Number(id)) : deleteTodoListItem(Number(id));
    };

    const handleFilterCLick = ({
        target: {
            dataset: {
                filter = ''
            } = {}
        } = {}
    }) => {
        setFilter(filter);
    };

    useEffect(() => {
        if (filter === 'all') {
            setList(todoList);
        } else if (filter === 'completed') {
            setList(todoList.filter(({ done = false }) => done));
        } else {
            setList(todoList.filter(({ done = false }) => !done));
        }
    }, [filter, todoList]);

    return (
        <Fragment>
            <section className='filter'>
                {
                    filterValues.map(({ label = '', value = '' }, index = -1) => (
                        <Fragment>
                            { index !== 0 && ' '}
                            <span 
                                tabIndex='0' 
                                onClick={handleFilterCLick} 
                                data-filter={value}
                                style={{ fontWeight: filter === value ? 'bold' : undefined }}
                            > 
                                {label}
                            </span>
                            { index !== filterValues.length - 1 && ' |'}
                        </Fragment>
                    ))
                }
            </section>
            <ul>
                {
                    list.length < 1 
                    && <span>Sorry, no applicable items found.</span>
                }
                {
                    list.length > 0 
                    && list.map(({ id = -1, name = '', done = false }, index) => (
                        <TodoListItem 
                            key={`todoListItem-${index}`} 
                            done={done}
                            handleTodoClick={handleTodoClick}
                            id={id}
                            name={name} 
                        />
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default TodoList;