import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import React, {Component} from 'react';


const client = new ApolloClient({
  uri: 'http://localhost:1024/graphql'
})
class App extends Component {
  render() {
    return (
     <ApolloProvider	client={client}>
        <div id="main">

        </div>
     </ApolloProvider>
    );
  }
}

export default App;
