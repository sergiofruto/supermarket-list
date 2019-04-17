import React, { Component } from 'react';
import { getAllItems, addItem, deleteItem } from './api';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Modal from 'components/Modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: false,
      newItem: "",
      modalOpen: false,
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // window.addEventListener(
    //   "beforeunload",
    //   this.saveStateToLocalStorage.bind(this)
    // );
  }

  componentWillUnmount() {
    // window.removeEventListener(
    //   "beforeunload",
    //   this.saveStateToLocalStorage.bind(this)
    // );

    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage = () => {
    getAllItems()
    .then(list => {
      this.setState({
        isLoading: false,
        list
      });
    })
  }

  saveStateToLocalStorage() {
    localStorage.setItem("list", JSON.stringify(this.state.list));
  }

  updateInput = event => {
    this.setState({ newItem: event.target.value  });
  }

  handleAddItem = e => {
    e.preventDefault();

    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    addItem(newItem)
    .then(item => {
      const list = [...this.state.list];
      list.push(item);
      this.setState({
        list,
        newItem: "",
        modalOpen: false,
      });
    })
  }

  handleDeleteItem = id => {
    deleteItem(id)
    .then(item => {
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({ list: updatedList });
    })
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <main className="app">
        <section className="container">
          <h1 className="app-healine">Supermarket List</h1>
          <p className="counter">
            {this.state.list.length}
            {this.state.list.length === 1 ? ' item' : ' items'}
          </p>
          <List>
            {this.state.list.map(item => {
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  removeItem={this.handleDeleteItem}
                />
              );
            })}
          </List>
          <button className="add-button" type="button" onClick={() => this.openModal()}>
            Add Item
          </button>
        </section>
        {this.state.modalOpen &&
        <Modal
          inputValue={this.state.newItem}
          handleAddItem={this.handleAddItem}
          handleCancel={this.closeModal}
          handleInputChange={this.updateInput}
          disabledButton={!this.state.newItem.length}
        />
        }
      </main>
    );
  }
}

export default App;
