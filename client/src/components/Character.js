import graphql from 'graphql-anywhere';
import React, { Component } from 'react';

class Character extends Component {
  constructor() { }
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