import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
// Models
import Character from '../models/character';
import House from '../models/house';


const HouseType = new GraphQLObjectType({
  name: 'house',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    characters: {
      type: new GraphQLList(CharacterType),
      resolve() {
        return Character.findById(parent.id)
      }
    }
  })
});

const CharacterType = new GraphQLObjectType({
  name: 'character',
  fields: () => ({
    id: { type: GraphQLID },
    houseId: { type: GraphQLID },
    characterName: { type: GraphQLString },
    actorName: { type: GraphQLString },
    siblings: { type: new GraphQLList(GraphQLString) },
    kills: { type: new GraphQLList(GraphQLString) },
    house: {
      type: HouseType,
      resolve(parent, args) {
        return House.findById(parent.id);
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    houses: {
      type: HouseType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return House.findById(args.id);
      }
    },
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Character.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addHouse: {
      type: HouseType,
      args: {
        name: { type: GraphQLString },
        characters: {
          type: new GraphQLList(GraphQLString)
        }
      },
      resolve(parent, args) {
        let house = new House({
          name: args.name,
          characters: args.characters
        })
        return house.save();
      }
    },
    addCharacter: {
      type: CharacterType,
      args: {
        characterName: { type: GraphQLString },
        actorName: { type: GraphQLString },
        houseId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let character = new Character({
          characterName: args.characterName,
          actorName: args.actorName,
          houseId: args.houseId
        })
        return character.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})