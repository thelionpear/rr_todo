import React, { Component } from 'react';
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList'; 

class App extends Component {
  state = { todos: [] } 

  componentDidMount() {

  }

  addItem = (name, priority) => { 
    
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
