import { gql } from 'apollo-boost';

const getCharacter = gql`
  query GetCharacter($id: ID)
    {
      character(id: $id){
        id
        characterName
        actorName
        kills
        siblings
      }
  }
`;

const getHouseData = gql`
  query GetHouse($id: ID)
    {
      house(id: $id){
        id
        name
        characters{
          id,
          characterName,
          kills,
          actorName
        }
      }
  }
`;


const getHouses = gql`{
  houses {
    id
    name
  }
}`;

export { getCharacter, getHouses, getHouseData };

