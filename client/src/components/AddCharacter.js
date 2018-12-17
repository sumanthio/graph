import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <form>
        <div>
          <label></label>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
      </form>
    );
  }
}

export default App;
