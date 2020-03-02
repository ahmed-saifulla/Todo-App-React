import React from 'react';
import './App.css';
import ListItems from './listItems'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.clearTodos = this.clearTodos.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  clearTodos(e) {
    this.setState({
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    })
  }
  deleteItem(toDeleteItemkey) {
    const filteredItems = this.state.items.filter(item => item.key !== toDeleteItemkey)
    this.setState({
      items: filteredItems,
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input id="todo-input" type="text" placeholder="Enter a todo" value={this.state.currentItem.text} onChange={this.handleInput} />
            <button id="add-btn" type="submit">Add</button>
            <button id="clear-btn" type="button" onClick={this.clearTodos}>Clear</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem}></ListItems>
      </div>
    );
  }
}

export default App;
