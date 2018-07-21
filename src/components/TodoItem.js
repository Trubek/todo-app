import React from 'react';

const TodoItem = (props) => (
    <div className='todos-item'>
        <label className='box'>
            <input 
                type='checkbox'
                className='checkbox-input'
            />
            {props.todoText}
            <span className='checkmark'></span>
        </label>
        <button 
            className='garbage'
            onClick={() => props.removeItem(props.index)}
        >
        <img src='/images/garbageIcon.png'/>
        </button>
    </div>
)

export default TodoItem;