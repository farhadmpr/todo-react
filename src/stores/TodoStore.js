import {observable, action} from 'mobx'
import TodoModel from './TodoModel'

class TodoStore {
    @observable todos = []
    @observable itemsLeft = 0
    @observable whichItemsShow = "All"

    lastID = 0

    @action
    addTodo(title){
        this.todos.push(
            new TodoModel(this, title, false, this.lastID++)        
        )
        this.itemsLeft++
    }
    
    @action
    deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.itemsLeft = this.todos.filter(todo => todo.completed === false).length
    }

    @action
    clearCompleted(){
        this.todos = this.todos.filter(todo => todo.completed === false)
    }
}

const store = new TodoStore()
export default store