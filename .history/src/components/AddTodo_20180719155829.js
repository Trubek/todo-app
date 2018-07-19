import React from 'react';

export default class AddTodo extends React.Component {
    
    handleAddTodo = (e) => {
        
        e.preventDefault()

        const todo = e.target.elements.todo.value.trim();

        if(todo) {
            this.props.addTodo(todo);
            e.target.elements.todo.value = '';
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
                    <button className='button'><image src='/images/clockIconGreen.png'/></button>
                </form>
            </div>
        )
    }
}