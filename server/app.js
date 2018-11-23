const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema');
const app = express();

//Need to be added:
// mongoose schema.
// Create mlab collections
// Mutations with the collections
// GraphQLlists of the entire endpoints
// Usecase of a DS with proper set of data


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(1024, () => {
  console.log('Listening on 1024');
})