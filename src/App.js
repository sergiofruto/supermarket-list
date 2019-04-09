import React, { Component } from 'react';
import './App.css';
import List from 'components/List';
import ListItem from 'components/ListItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
      modalOpen: false,
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          console.log('vaciooo');
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <main className="App">
        <section className="Container">
          <h1 className="AppHealine">Supermarket List</h1>
          <p className="Counter">
            {this.state.list.length}
            {this.state.list.length > 1 ? ' items' : ' item'}
          </p>
          <List>
            {this.state.list.map(item => {
              return (
                <ListItem key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </ListItem>
              );
            })}
          </List>
          <button type="button" onClick={() => this.openModal()}>
            open modal
          </button>
        </section>
        {this.state.modalOpen &&
          <div className="Overlay">
            <div className="OverlayContent">
              <h2>Add Item</h2>
              <input
                type="text"
                placeholder="Type item here"
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
              />
              <button
                onClick={() => this.addItem()}
                disabled={!this.state.newItem.length}
              >
                Add
              </button>
              <button onClick={() => this.closeModal()}>
                cancel
              </button>
            </div>
          </div>
        }
      </main>
    );
  }
}

export default App;
