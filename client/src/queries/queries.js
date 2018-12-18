import { gql } from 'apollo-boost';

const getCharacter = gql`
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

export { getCharacter };

