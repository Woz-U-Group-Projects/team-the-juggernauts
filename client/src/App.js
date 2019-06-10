import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    fruit: [],
    newFruit: "",
    searchFruit: ""
  };

  getFruit() {
    axios.get("http://localhost:5000/fruit").then(res => {
      const fruit = res.data;
      this.setState({ fruit });
    });
  }

  componentDidMount() {
    this.getFruit();
  }

  submitFruit() {
    axios
      .post("http://localhost:5000/fruit", { name: this.state.newFruit })
      .then(res => {
        this.setState({ newFruit: "" }); //Reset new fruit field to blank.
        this.getFruit();
      });
  }

  searchFruit(searchTerm) {
    if (searchTerm === "") {
      this.setState({ searchFruit: "" }); //Clearing search fruit eliminates odd behavior when clearing search field.
      this.getFruit();
    } else {
      this.setState({ searchFruit: searchTerm }); //This is necessary or text input will hold only one character.
      axios.get("http://localhost:5000/fruit/search/" + searchTerm)
        .then(res => {
          const fruit = res.data;
          this.setState({ fruit });
        });
    }
  }

  deleteFruit(id) {
    axios.delete("http://localhost:5000/fruit/" + id + "")
      .then(res => {
        console.log(res.body);
        this.getFruit();
      });
  }

  editFruit(id, name) {
    let result = prompt('Edit Fruit Name', name);
    if (result !=null ) name = result;
    axios
      .post("http://localhost:5000/fruit/edit",
        { "id": id, "name": name })
      .then(res => { 
        console.log(res);
        this.getFruit(); //Refresh
      });
  }

  render() {
    return (
      <div>

        <h3>Search</h3>
        <input
          value={this.state.searchFruit}
          onChange={evt => this.searchFruit(evt.target.value)}
        />
        <button onClick={() => this.searchFruit("")}>Reset</button>

        <h1>Fruits:</h1>
        <ul>
          {this.state.fruit.map(f => (
            <li key={f.id}>
              <button onClick={() => this.deleteFruit(f.id)}>X</button>
              <button onClick={() => this.editFruit(f.id, f.name)}>Edit</button>
              <nbsp /> {f.name}
              <ul>
                <li>{f.description}</li>
              </ul>
            </li>
          ))}
        </ul>

        <h3>Add Fruit</h3>
        <input
          value={this.state.newFruit}
          onChange={evt => this.setState({ newFruit: evt.target.value })}
        />
        <button onClick={() => this.submitFruit()}>Submit</button>
      </div>
    );
  }
}

export default App;
