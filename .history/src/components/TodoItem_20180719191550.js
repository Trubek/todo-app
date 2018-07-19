import React from 'react';

export default class TodoItem extends React.Component  {
    
    markChecked = (e) => {
        
        e.preventDefault();

        const checked = e.target.cheaked;
        
        if(checked) {
            this.props.singleChecked(checked);
        }

    }
    
    reunder() {
        return (
            <div className='todo-item'>
            <input 
            type='checkbox'
            checked={props.isChecked}
            onChange={props.markChecked}
            />{props.todoText}
            <button 
                className='garbage'
                onClick={() => props.removeItem(props.index)}
            >
            <img src='/images/garbageIcon.png'/>
            </button>
        </div>
        )
    }
}

export default TodoItem;