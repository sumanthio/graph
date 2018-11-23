const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();


app.listen(1024, () => {
  console.log('Listening on 1024');
})