import React, { Component } from "react";
import TodoItem from './TodoItem'
import todoStore from '../stores/TodoStore'
import {observer} from 'mobx-react'

@observer
class TodoItems extends Component {
  render() {
    let todos = todoStore.todos
    if(todoStore.whichItemsShow==="Active")
      todos=todos.filter(todo=>todo.completed===false)   
    if(todoStore.whichItemsShow==="Completed")
      todos=todos.filter(todo=>todo.completed===true)         

    return (
      <section className="main">
        <ul className="todo-list">
        {                      
          todos.map(todo=>{
              return(
                <TodoItem todo={todo} />
              )
            })
        }
        </ul>
      </section>
    );
  }
}

export default TodoItems;
