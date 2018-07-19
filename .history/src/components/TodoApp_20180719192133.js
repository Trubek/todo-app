import React from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import SelectAll from './SelectAll';
import SaveButton from './SaveButton';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {

    state = {
        todoList: [],
        allChecked: undefined,
        save: {}
    }

    addTodoHandler = (todo) => {
        this.setState((prevState) => {
            return { todoList: [...prevState.todoList, todo] }
        })
    }

    singleChecked = () => {
        
    }

    filterHandler = (value) => {

        const nodeListDivs = document.querySelector('.todo-list').childNodes;
        const nodeListInputs = document.querySelectorAll('.todo-list div input')
        for(let i=0; i < nodeListDivs.length; i++) { nodeListDivs[i].setAttribute("style", "display: flex;")}

        if(value !== 'all') {
            for(let i=0; i < nodeListDivs.length; i++) {
                    
                if(value === 'completed') {
                    if(!nodeListInputs[i].checked) nodeListDivs[i].setAttribute("style", "display: none;");
                }
                else {
                    if(nodeListInputs[i].checked) nodeListDivs[i].setAttribute("style", "display: none;");
                }
                }
        } else {
            for(let i=0; i < nodeListDivs.length; i++) { nodeListDivs[i].setAttribute("style", "display: flex;")}
        }
    }

    removeTodoHandler = (index) => {
        this.setState((prevState) => {
            let newList = prevState.todoList.map(todo => todo);
            newList = [...newList.slice(0, index), ...newList.slice(index + 1)];
            return { todoList: newList }
        })
    }

    saveList = () => {
        const json = JSON.stringify(this.state.todoList);
        localStorage.setItem("todoList", json);
    }

    selectAllHandler = () => {
        this.setState((prevState) => {
            return {allChecked: !prevState.allChecked}
        })
    }


    
    componentDidMount() {
        try {
            const json = JSON.parse(localStorage.getItem("todoList"));
            if (json) {
                    this.setState(() => ({todoList: json}));
            }
        } catch(e) {
            // Do nothing
        }
    }

    render() {
        return (
            <div className='container'>
                <AddTodo addTodo={this.addTodoHandler} />
                <Filter filterList={this.filterHandler}/>
                <SelectAll selectAll={this.selectAllHandler} />
                <TodoList
                    todoList={this.state.todoList}
                    removeTodo={this.removeTodoHandler}
                    isChecked={this.state.allChecked}
                    singleChecked={this.singleChecked}
                />
                <SaveButton saveList={this.saveList}/>
            </div>
        )
    }
};

