import React, { Component } from 'react';
import uuid from 'uuid';
import List from './components/List';
import ListItem from './components/ListItem';
import Modal from './components/Modal';
import Loader from './components/Loader';
import { getAllItems, addItem, deleteItem } from './api';
import './App.css';

class App extends Component {
  state = {
    list: [],
    isLoading: true,
    newItem: '',
    modalOpen: false,
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  componentWillUnmount() {
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage = () => {
    getAllItems()
      .then((list) => {
        this.setState({
          isLoading: false,
          list,
        });
      });
  }

  updateInput = (event) => {
    this.setState({ newItem: event.target.value });
  }

  handleAddItem = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    const { newItem } = this.state;
    const newItemVal = {
      id: uuid.v4(),
      value: newItem.slice(),
    };

    addItem(newItemVal)
      .then(item => this.setState({
        list: [...this.state.list, item],
        newItem: '',
        modalOpen: false,
        isLoading: false,
      }))
      .catch(err => this.setState({ error: err }));
  }

  handleDeleteItem = (id) => {
    deleteItem(id)
      .then((item) => {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({ list: updatedList });
      })
      .catch(err => this.setState({ error: err }));
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  saveStateToLocalStorage() {
    localStorage.setItem('list', JSON.stringify(this.state.list));
  }

  render() {
    const {
      list,
      newItem,
      modalOpen,
      isLoading,
    } = this.state;

    return (
      <main className="app">
        <section className="container">
          <h1 className="app-healine">Supermarket List</h1>
          {!isLoading
            ? (
              <p className="counter">
                {list.length >= 1 ? `${list.length} items` : 'List is empty'}
              </p>
            )
            : <Loader />
          }
          <List>
            {list.map(item => (
              <ListItem
                key={item.id}
                id={item.id}
                value={item.value}
                removeItem={this.handleDeleteItem}
              />
            ))}
          </List>
          <button className="add-button" type="button" onClick={this.openModal}>
            Add Item
          </button>
        </section>
        {modalOpen
          && (
            <Modal
              inputValue={newItem}
              handleAddItem={this.handleAddItem}
              handleCancel={this.closeModal}
              handleInputChange={this.updateInput}
              disabledButton={!newItem.length}
              isLoading={isLoading}
            />
          )
        }
      </main>
    );
  }
}

export default App;
