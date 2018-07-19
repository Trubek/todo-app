import React from 'react';

export default class AddTodo extends React.Component {
    
    handleAddTodo = (e) => {
        
        e.preventDefault()

        const todo = e.target.elements.todo.value.trim();
        if(todo) {
            this.props.addTodo(todo);
            todo = '';
        }
    } 
    render() {
        return (
            <div>
                <form className='add-todo' onSubmit={this.handleAddTodo}>
                    <input
                        className='add-todo__input'
                        placeholder='Add Todo...'
                        name='todo'
                    ></input>
                    <button className='button'>Add</button>
                </form>
            </div>
        )
    }
}