import React from 'react';

export default class AddTodo extends React.Component {

    state = {
        focus: undefined
    }
    
    handleAddTodo = (e) => {
        
        e.preventDefault()

        const todo = e.target.elements.todo.value.trim();

        if(todo) {
            this.props.addTodo(todo);
            e.target.elements.todo.value = '';
        }
    }
    
    focusHandler = () => {
        this.setState((prevState) => {
            return {focus: !prevState.focus}
        })
    }

    render() {
        return (
            <div className='todo'>
                <form className='add-todo' onSubmit={this.handleAddTodo}>
                    <input
                        className='add-todo__input'
                        placeholder='Add Todo...'
                        name='todo'
                        onFocus={this.focusHandler}
                        onBlur={this.focusHandler}
                    ></input>
                    <button className='button-clock'>
                        <img src={this.state.focus ? '/images/clockIconBlack.png' : '/images/clockIconGreen.png'}/>
                    </button>
                </form>
            </div>
        )
    }
}