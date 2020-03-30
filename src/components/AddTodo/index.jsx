import React, { Fragment, useState } from 'react';

const AddTodo = ({ 
    addTodoListItem
}) => {
    const [todoInput, setTodoInput] = useState('');
    const [inputLabelModify, setInputLabelModify] = useState(false);

    const handleChange = ({
        target: {
            value = ''
        } = {}
    }) => {
        setTodoInput(value);
    };

    const handleTouch = (e) => {
        const {
            target: {
                value = ''
            } = {},
            type = ''
        } = e;
        e.persist();
        setInputLabelModify((type === 'blur' && value !== '') || type === 'focus');
    };

    const handleAddTodoClick = () => {
        if (todoInput === '') {
            return;
        }
        addTodoListItem(todoInput);
        setTodoInput('');
        setInputLabelModify(false);
    };
    
    return (
        <Fragment>
            <div className='input_container'>
                <label className={`input_label ${inputLabelModify ? 'input_label_modify' : ''}`}>New Todo</label>
                <input
                    type="text" 
                    onBlur={handleTouch}
                    onChange={handleChange}
                    onFocus={handleTouch}
                    name="todoInput"
                    value={todoInput}
                    tabIndex="0"
                />
            </div>
            <button
                disabled={todoInput === ''}
                onClick={handleAddTodoClick}
            >
                Add
            </button> 
            <hr />
        </Fragment>
    );
};
 
export default AddTodo;