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


switch (environment) {
  case 'production':
    app.use(express.static('./build/'));
    app.use('/*', express.static('./build/index.html'));
    break;
  default:
    console.log('** DEV **');
    break;
}


app.listen(1024, () => {
  console.log('Listening on 1024');
})