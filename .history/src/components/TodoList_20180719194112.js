import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (

    <div className='todos'>
        <header>Todos:</header>
        <div className='todo-list'>
            {props.todoList.map((todo, index) =>
                <TodoItem
                    key={index}
                    index={index}
                    todoText={todo}
                    removeItem={props.removeTodo}
                />
            )}
        </div>
    </div>

)

export default TodoList;