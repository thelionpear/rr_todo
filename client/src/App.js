import React, { Component } from 'react';
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList'; 
import Todo from './components/Todo'; 

class App extends Component {
  state = { todos: [
    { id:1, name: 'buy milk', priority: 'low', complete: false},
    { id:2, name: 'buy milk', priority: 'low', complete: true } 
  ] } 

  componentDidMount() {

  }

  addItem = (name, priority) => { 
    const { todos } = this.state;
    const id = Math.floor(Math.random() * 0x1000).toString()
    const todo = { id, name, priority }
    this.setState({ todos: [...todos, todo] })
  }

  updateItem = (id) => { 

  }

  deleteItem = (id) => {

  }

  render() {
    return (
      <div className="container">
        <TodoForm addItem={this.addItem}/>
        <TodoList 
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          items={this.state.todos}
        />
      </div> 
    );
  }
}

export default App;
