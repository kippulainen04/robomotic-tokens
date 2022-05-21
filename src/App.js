import React, { Component } from 'react';  

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// to get whatever functionality that this React componenet that was built into the libary by other developers React.Component
class App extends Component {
  
  constructor() {
    super();
// super(), so it gives us access to this.state by calling React.Component's constructor ()
    this.state = {
      robots:  [],
      searchField: ''
    };
  }
// fetch to make an API request to the URL, return a promise, then we turn it into a json
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(users => this.setState({robots: users}));
  } 


  onSearchChange = (event) => {
  this.setState({ searchField: event.target.value});
  };


// {} is a JS expression
  render() {
    const { robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
<<<<<<< HEAD
      <div className= 'App'>
        <h1>Robomatic Tokens</h1>
        <SearchBox onSearchChange={this.onSearchChange} /> 
=======
      <div className="App">
        <h1>Robomotic Token</h1>
        <SearchBox 
          placeholder='search robots' 
          handleChange={e => this.setState({ searchField: e.target.value})}
        /> 
>>>>>>> 8d770b11b0e82020e2533da69498f63d3352988d
        <CardList robots={filteredRobots}/>
      </div>
    );
  }  
}

export default App;
