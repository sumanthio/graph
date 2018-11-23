const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy data
const books = [
  { name: 'Game of Thrones', genre: 'Fantasy', id: 1 },
  { name: 'The Jumper', genre: 'Sci-Fi', id: 2 },
  { name: 'Crush it', genre: 'Bio', id: 3 },
]


const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});



// book(id: '123'){
//   name
//   genre
// }

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get date from DB
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
})