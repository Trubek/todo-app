import React from 'react';

const TodoItem = (props) => (
    <div className='todo-item'>
        <input 
        type='checkbox'
        />{props.todoText}
        <button 
            className='garbage'
            onClick={() => props.removeItem(props.index)}
        >
        <img src='/images/garbageIcon.png'/>
        </button>
    </div>
)

export default TodoItem;