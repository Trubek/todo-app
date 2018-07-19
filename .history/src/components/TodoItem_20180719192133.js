import React from 'react';

export default class TodoItem extends React.Component  {
    
    markChecked = (e) => {
        
        e.preventDefault();

        e.target.cheaked = true;
        


    }
    
    render() {
        return (
            <div className='todo-item'>
            <input 
            type='checkbox'
            checked={this.props.isChecked}
            onChange={this.markChecked}
            />{this.props.todoText}
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

