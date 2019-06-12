import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Friends from './Components/Friends'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friendsList: [],
      
    };
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
    .then(friends => {
      this.setState(() => ({ friendsList: friends.data }));
      console.log(friends);
    })
    .catch(error => {
      console.error(error);
    });
};

  render() {
    return(
      <div class="App">
      <h1>Friends List!</h1>
      <Friends friends={this.state.friendsList}/>
      </div>
    );
  };
};

export default App;
