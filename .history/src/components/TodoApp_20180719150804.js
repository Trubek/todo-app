import React from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import SelectAll from './SelectAll';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {

    state = {
        todoList: [],
        allChecked: undefined
    }

    addTodoHandler = (todo) => {
        this.setState((prevState) => {
            return { todoList: [...prevState.todoList, todo] }
        })
    }

    filterHandler = (value) => {

        const nodeListDivs = document.querySelector('.todo-list').childNodes;
        const nodeListInputs = document.querySelectorAll('.todo-list div input')

        if(value !== 'all') {
            nodeListDivs[i].setAttribute("style", "display: block;")
            for(let i=0; i < nodeListDivs.length; i++) {
                    
                if(value === 'completed') {
                    if(!nodeListInputs[i].checked) nodeListDivs[i].setAttribute("style", "display: none;");
                }
                else {
                    if(nodeListInputs[i].checked) nodeListDivs[i].setAttribute("style", "display: none;");
                }
                }
        } else {
            for(let i=0; i < nodeList.length; i++) { nodeListDivs[i].setAttribute("style", "display: block;")}
        }
    }

    removeTodoHandler = (index) => {
        this.setState((prevState) => {
            let newList = prevState.todoList.map(todo => todo);
            newList = [...newList.slice(0, index), ...newList.slice(index + 1)];
            return { todoList: newList }
        })
    }

    selectAllHandler = () => {
        this.setState((prevState) => {
            return {allChecked: !prevState.allChecked}
        })
    }

    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodoHandler} />
                <Filter filterList={this.filterHandler}/>
                <SelectAll selectAll={this.selectAllHandler} />
                <TodoList
                    todoList={this.state.todoList}
                    removeTodo={this.removeTodoHandler}
                    isChecked={this.state.allChecked}
                />
            </div>
        )
    }
};

