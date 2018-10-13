import React, { Component } from 'react';
import { Map } from 'immutable';

import InitState from './InitState/InitState';
import LandingState from './LandingState/LandingState';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      appState : 'landing',

      faction : null,
      team : Map({}),
    }
  }

  render() {
    return (
      <div className="App">
        {this.getDisplay()}
      </div>
    );
  }

  setTeam = (team) => {
    this.setState({team : team});
  }

  setFaction = (faction) => {
    this.setState({faction : faction});
  }

  connectToGameRoom = () => {

  }

  getDisplay = () => {
    switch(this.state.appState){
      case 'init':
        return <InitState></InitState>;

      case 'landing':
        return (
          <LandingState>
          </LandingState>
        );

      default:
        return <p>current state not found</p>
    }
  }
}

export default App;
