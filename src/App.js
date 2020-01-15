import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/header/header.component';
import CardList from '../src/components/card-list/card-list.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      "searchText": "",
      "monsters": []
    }
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ monsters: response }));
  }

  handleChange = (e) => {
    this.setState({ "searchText": e.target.value });
  }

  render() {
    let { searchText, monsters } = this.state;
    let filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes
      (searchText.toLowerCase()));
    return (
      <React.Fragment>
        <Header name="Halloween On The Go"
          placeholderText="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </React.Fragment>
    )
  }
}

export default App;
