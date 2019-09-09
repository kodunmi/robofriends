import React from 'react';
import './App.css';
import CardList from './cardList';
import SearchBar from './searchBar';
import { robots } from './robots'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      robots : robots,
      searchField : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  } 
  render() {
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    })
    return (
      <div>
        <h1 className="tc">RoboFriend</h1>
        <SearchBar searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
