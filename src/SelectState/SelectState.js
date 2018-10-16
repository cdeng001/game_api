import React, { Component } from 'react';
//import char0_portrait from '../images/portraits/char0_portrait.png';
import characterList from '../data/characters';
import TeamDisplay from '../TeamDisplay/TeamDisplay';

import './SelectState.css';

const images = require.context('../images', true);

class SelectState extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="select-state">
        <p> select </p>
        <TeamDisplay
            team = {this.props.team}>
        </TeamDisplay>
        {this.getCharacterSelection()}
      </div>
    );
  }

  getCharacterSelection = () => {
    let selection = [];
    characterList.characters.forEach((character, index) => {
        selection.push(
            <li key={character.name + index}>
                <div 
                    className="character-panel"
                    onClick={() => {this.addCharacter(character)}}>
                    <p>{character.name}</p>
                    <img src={images('./' + character.portrait)} />
                </div>
            </li>
        );
    });

    return (
        <ul className="character-selection">
            {selection}
        </ul>
    );
  }

  addCharacter = (character) => {
    console.log(character);
  }
}

export default SelectState;
