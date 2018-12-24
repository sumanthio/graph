import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getHouseData } from '../queries';
import Character from './Character';

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacter: null
    }
  }
  displayHouseData() {
    let { house } = this.props.data;
    if (house) {
      return (
        <div>
          <h2>Characters of House {house.name}</h2>
          <ul>
            {house.characters.map((character) =>
              <li key={character.id} onClick={e => this.setState({ selectedCharacter: character.id })}>{character.characterName}</li>
            )}
          </ul>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="house-data">
        {this.displayHouseData()}
        {this.state.selectedCharacter ? <Character characterId={this.state.selectedCharacter} /> : null}
      </div>
    )
  }
}

export default graphql(getHouseData, {
  options: (props) => {
    return {
      variables: {
        id: props.houseId
      }
    }
  }
})(House);