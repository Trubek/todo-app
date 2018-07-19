import React from 'react';

const TodoItem = (props) => (
    <div>
        <input 
        type='checkbox'
        // checked={props.isChecked}
        />{props.todoText}
        <button 
            className='button' 
            onClick={() => props.removeItem(props.index)}
        >
        Remove</button>
    </div>
)

export default TodoItem;