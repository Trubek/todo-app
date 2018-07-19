import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (

    <div>
        <header>TODOS</header>
            {props.todoList.map((todo, index) =>
                <TodoItem
                    key={index}
                    index={index}
                    todoText={todo}
                    isChecked={props.isChecked}
                    removeItem={props.removeTodo}
                    singleChecked={props.singleChecked}
                />
            )}
    </div>

)

export default TodoList;