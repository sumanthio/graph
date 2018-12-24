import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import { DB } from './config';
const schema = require('./schemas/schema');
const app = express();
mongoose.connect(DB.url, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('DB connected');
})
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(1024, () => {
  console.log('Listening on 1024');
})