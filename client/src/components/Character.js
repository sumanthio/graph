import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCharacter } from '../queries';

class Character extends Component {
  constructor(props) {
    super(props);
  }
  displayCharacterData() {
    let { character } = this.props.data;
    if (character) {
      return (
        <div>
          <h3>{character.characterName}</h3>
          <h3>{character.actorName}</h3>
          <ul>
            {character.kills.map((kill) => <li>{kill}</li>)}
          </ul>
          <ul>
            {character.siblings.map((sibling) => <li>{sibling}</li>)}
          </ul>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="character-data">
        {this.displayCharacterData()}
      </div>
    )
  }
}

export default graphql(getCharacter, {
  options: (props) => {
    return {
      variables: {
        id: props.characterId
      }
    }
  }
})(Character);