import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getHousesQuery } from '../queries';
class Houses extends Component {
  constructor() {
    this.state = {
      selectedHouse: null
    }
  }
  displayHouseData() {
    let house = this.props.data;
    if (house) {
      return (
        <div>
          <h2>{house.name}</h2>
          <div></div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="character-list">
        <ul>
          <li>{this.displayHouseData()}</li>
        </ul>
      </div>
    )
  }
}

export default graphql(getHousesQuery)(Houses);