import { gql } from 'apollo-boost';
const getCharacters = gql`
query GetCharacter(id: $ID)
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

export { getCharacters };

