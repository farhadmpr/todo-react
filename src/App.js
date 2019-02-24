import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import TodoMenu from './components/TodoMenu'
import "./App.css";

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />        
        <TodoMenu />
      </div>
    );
  }
}

export default App;
