import express from 'express';
import graphqlHTTP from 'express-graphql';
import { DB } from './config';

const schema = require('./schemas/schema');
const app = express();

// Need to be added:
// Hook the data to the mlab Collection
// mongoose schema.
// Mutations with the collections
// Write mutations for adding house and character

console.log(DB.url);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(1024, () => {
  console.log('Listening on 1024');
})