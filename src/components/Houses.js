import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getHouses } from '../queries';
import House from './House';
class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHouse: null
    }
  }
  displayHouses() {
    let { houses } = this.props.data;
    if (houses) {
      return (
        <ul>
          {houses.map((house) =>
            <li key={house.id} onClick={e => this.setState({ selectedHouse: house.id })}>{house.name}</li>
          )}
        </ul>
      )
    }
  }
  render() {
    return (
      <div className="houses">
        <h2>Houses</h2>
        {this.displayHouses()}
        <House houseId={this.state.selectedHouse} />
      </div>
    )
  }
}

export default graphql(getHouses)(Houses);