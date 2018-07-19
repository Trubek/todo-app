import React from 'react';

const TodoItem = (props) => (
    <div className='todo-item'>
        <input 
        type='checkbox'
        // checked={props.isChecked}
        />{props.todoText}
        <button 
            className='button' 
            onClick={() => props.removeItem(props.index)}
        >
        <img src='/images/garbageIcon.png'>
        </button>
    </div>
)

export default TodoItem;