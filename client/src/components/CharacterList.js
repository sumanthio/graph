import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCharactersQuery } from '../queries';
class CharacterList extends Component {
  constructor() {

  }
  displayCharacters() { }
  render() {
    return (
      <div className="character-list">
        <ul>
          <li>{this.displayCharacters()}</li>
        </ul>
        <Character characterId={this.state.characterId}></Character>
      </div>
    )
  }
}

export default graphql(getCharactersQuery)(CharacterList);