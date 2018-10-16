import React, { Component } from 'react';
import { Map } from 'immutable';

import InitState from './InitState/InitState';
import LandingState from './LandingState/LandingState';
import SelectState from './SelectState/SelectState';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      appState : 'select',

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

  setAppState = (state) => {
    this.setState({
      appState : state,
    });
  }

  setTeam = (team) => {
    this.setState({team : team});
  }

  setFaction = (faction) => {
    this.setState({faction : faction});
  }

  addCharacterToTeam = (char) => {
    if( char instanceof Map ){
      this.setTeam(this.state.team.push(char));
    }
    else{
      console.err("Character argument not of type Map.");
    }
  }

  connectToGameRoom = () => {

  }

  getDisplay = () => {
    switch(this.state.appState){
      case 'init':
        return <InitState></InitState>;

      case 'landing':
        return (
          <LandingState
            team = {this.state.team}>
          </LandingState>
        );

      case 'select':
        return (
          <SelectState
            team = {this.state.team}>
          </SelectState>
        );

      default:
        return <p>current state not found</p>
    }
  }
}

export default App;
