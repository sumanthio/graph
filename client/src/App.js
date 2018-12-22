import ApolloClient from 'apollo-boost';
import React, { Component } from "react";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:1024/graphql'
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Game of Thrones</h1>
          <House />
          <AddHouse />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
