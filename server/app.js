const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema');
const DB = require('./config');
const app = express();

// Need to be added:
// Hook the data to the mlab Collection
// mongoose schema.
// Mutations with the collections
// Write mutations for adding house and character


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(1024, () => {
  console.log('Listening on 1024');
})