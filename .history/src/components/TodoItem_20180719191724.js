import React from 'react';

export default class TodoItem extends React.Component  {
    
    markChecked = (e) => {
        
        e.preventDefault();

        const checked = e.target.cheaked;
        
        if(checked) {
            this.props.singleChecked(checked);
        }

    }
    
    render() {
        return (
            <div className='todo-item'>
            <input 
            type='checkbox'
            checked={this.props.isChecked}
            onChange={this.markChecked}
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

