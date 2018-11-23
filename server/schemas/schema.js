const graphql = require('graphql');

const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLNonNull } = graphql;

const _find = require('lodash/find');
// Dummy data
const books = [
  { name: 'Game of Thrones', genre: 'Fantasy', id: '1' },
  { name: 'The Jumper', genre: 'Sci-Fi', id: '2' },
  { name: 'Crush it', genre: 'Bio', id: '3' },
]


const gotCharacters = [
  { name: 'Arya Stark', house: 'Stark', id: '1' },
  { name: 'Margery Tyrell', house: 'Tyrell', id: '2' },
  { name: 'Robb Stark', house: 'Stark', id: '3' },
  { name: 'Jon Snow', house: 'Stargeryan', id: '4' },
]


const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const GotCharacterType = new GraphQLObjectType({
  name: 'gotCharacter',
  fields: () => ({
    id: { type: GraphQLID },
    house: { type: GraphQLString },
    name: { type: GraphQLString }
  })
})



// book(id: '123'){
//   name
//   genre
// }

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get date from DB
        return _find(books, { id: args.id })
      }
    },
    gotCharacter: {
      type: GotCharacterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _find(gotCharacters, { id: args.id })
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
})