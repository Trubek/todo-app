import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (

    <div>
        <header>TODOS</header>
        <div className='todo-list'>
            {props.todoList.map((todo, index) =>
                <TodoItem
                    key={index}
                    index={index}
                    todoText={todo}
                    isChecked={props.isChecked}
                    removeItem={props.removeTodo}
                />
            )}
        </div>
    </div>

)

export default TodoList;