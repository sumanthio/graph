import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import find from 'lodash/find';

const Houses = [
  {
    "id": "1",
    "name": "Stark",
    "characters": [
      "Arya Stark",
      "Benjen Stark",
      "Bran Stark",
      "Catelyn Stark",
      "Eddard Stark",
      "Ghost",
      "Grey Wind",
      "Jon Snow",
      "Lady",
      "Nymeria",
      "Rickon Stark",
      "Robb Stark",
      "Sansa Stark",
      "Shaggydog",
      "Summer"
    ]
  },
  {
    "name": "Targaryen",
    "characters": [
      "Daenerys Targaryen",
      "Drogon",
      "Rhaegal",
      "Viserion",
      "Viserys Targaryen"
    ]
  },
  {
    "name": "Baratheon",
    "characters": [
      "Joffrey Baratheon",
      "Myrcella Baratheon",
      "Renly Baratheon",
      "Robert Baratheon",
      "Selyse Baratheon",
      "Shireen Baratheon",
      "Stannis Baratheon",
      "Tommen Baratheon"
    ]
  },
  {
    "name": "Lannister",
    "characters": [
      "Cersei Lannister",
      "Jaime Lannister",
      "Kevan Lannister",
      "Lancel Lannister",
      "Tyrion Lannister",
      "Tywin Lannister"
    ]
  },
  {
    "name": "Night's Watch",
    "characters": [
      "Alliser Thorne",
      "Eddison Tollett",
      "Grenn",
      "Jeor Mormont",
      "Karl Tanner",
      "Maester Aemon",
      "Olly",
      "Othell Yarwyck",
      "Pypar",
      "Qhorin Halfhand",
      "Rast",
      "Samwell Tarly",
      "Yoren"
    ]
  },
  {
    "name": "Dothraki",
    "characters": [
      "Doreah",
      "Irri",
      "Khal Drogo",
      "Rakharo"
    ]
  },
  {
    "name": "Greyjoy",
    "characters": [
      "Balon Greyjoy",
      "Euron Greyjoy",
      "Theon Greyjoy",
      "Yara Greyjoy"
    ]
  },
  {
    "name": "Tyrell",
    "characters": [
      "Loras Tyrell",
      "Mace Tyrell",
      "Margaery Tyrell",
      "Olenna Tyrell"
    ]
  },
  {
    "name": "Wildling",
    "characters": [
      "Baby Sam",
      "Craster",
      "Gilly",
      "Mag the Mighty",
      "Mance Rayder",
      "Osha",
      "Rattleshirt",
      "Thenn Warg",
      "Tormund Giantsbane",
      "Wun Wun",
      "Ygritte"
    ]
  },
  {
    "name": "Martell",
    "characters": [
      "Doran Martell",
      "Ellaria Sand",
      "Nymeria Sand",
      "Obara Sand",
      "Oberyn Martell",
      "Trystane Martell",
      "Tyene Sand"
    ]
  },
  {
    "name": "Frey",
    "characters": [
      "Black Walder Rivers",
      "Lothar Frey",
      "Walder Frey"
    ]
  },
  {
    "name": "Tully",
    "characters": [
      "Brynden Tully",
      "Edmure Tully"
    ]
  },
  {
    "name": "White Walkers",
    "characters": [
      "Mag the Mighty Wight",
      "The Night King",
      "White Walker",
      "Wight Wildling Girl",
      "Wun Wun Wight"
    ]
  },
  {
    "name": "Include",
    "characters": [
      "Archmaester Marwyn",
      "Barristan Selmy",
      "Beric Dondarrion",
      "Brienne of Tarth",
      "Bronn",
      "Daario Naharis",
      "Davos Seaworth",
      "Gendry",
      "Grand Maester Pycelle",
      "Greatjon Umber",
      "Gregor Clegane",
      "Greizhen mo Ullhor",
      "Grey Worm",
      "Hallyne",
      "High Sparrow",
      "Hizdahr zo Loraq",
      "Hodor",
      "Hot Pie",
      "Janos Slynt",
      "Jaqen H'ghar",
      "Jojen Reed",
      "Jorah Mormont",
      "Jory Cassel",
      "Kraznys mo Nakloz",
      "Lady Crane",
      "Leaf",
      "Locke",
      "Lommy Greenhands",
      "Lord Varys",
      "Lyanna Mormont",
      "Lysa Arryn",
      "Maester Luwin",
      "Matthos Seaworth",
      "Meera Reed",
      "Melisandre",
      "Mirri Maz Duur",
      "Missandei",
      "Olyvar",
      "Petyr Baelish",
      "Podrick Payne",
      "Prendahl na Ghezn",
      "Pyat Pree",
      "Qyburn",
      "Ramsay Snow",
      "Razdal mo Eraz",
      "Rickard Karstark",
      "Robin Arryn",
      "Rodrik Cassel",
      "Roose Bolton",
      "Ros",
      "Salladhor Saan",
      "Sandor Clegane",
      "Septa Mordane",
      "Septa Unella",
      "Shae",
      "Silk King",
      "Smalljon Umber",
      "Syrio Forel",
      "Talisa Maegyr",
      "The Waif",
      "Thoros of Myr",
      "Three-Eyed Raven",
      "Xaro Xhoan Daxos",
      "Yezzan zo Qaggaz",
      "Yohn Royce"
    ]
  }
]

const Characters = [
  {
    "id": "1",
    "characterName": "Arya Stark",
    "houseId": "1",
    "characterImageThumb": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MTYwNDc0OF5BMl5BanBnXkFtZTcwOTg2NDg1Nw@@._V1._SX100_SY140_.jpg",
    "characterImageFull": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MTYwNDc0OF5BMl5BanBnXkFtZTcwOTg2NDg1Nw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
    "actorName": "Maisie Williams",
    "siblings": [
      "Robb Stark",
      "Sansa Stark",
      "Bran Stark",
      "Rickon Stark"
    ],
    "kills": [
      "Red Keep Stableboy",
      "Frey Soldier #1",
      "Polliver",
      "Rorge",
      "Ghita",
      "Meryn Trant",
      "The Waif",
      "Black Walder Rivers",
      "Lothar Frey",
      "Walder Frey",
      "Petyr Baelish"
    ]
  }
]


const HouseType = new GraphQLObjectType({
  name: 'house',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    characters: {
      type: new GraphQLList(GraphQLString)
    }
  })
});

const CharacterType = new GraphQLObjectType({
  name: 'character',
  fields: () => ({
    id: { type: GraphQLID },
    houseId: { type: GraphQLString },
    characterName: { type: GraphQLString },
    actorName: { type: GraphQLString },
    siblings: { type: new GraphQLList(GraphQLString) },
    kills: { type: new GraphQLList(GraphQLString) },
    house: {
      type: HouseType,
      resolve(parent) {
        return find(Houses, { id: parent.houseId })
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
        // code to get date from DB
        return find(Houses, { id: args.id })
      }
    },
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return find(Characters, { id: args.id })
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
})