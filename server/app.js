const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema');
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(1024, () => {
  console.log('Listening on 1024');
})