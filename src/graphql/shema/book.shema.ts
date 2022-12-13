import {gql} from "apollo-server-express"
const typeDefs = gql`

type pe_people {
  cod_people: ID,
  cod_user: ID,
  firstName: String,
  middleName: String,
  lastName: String,
  photoProfile: String,
  photoBackground: String,
}

type User {
  cod_user : ID,
  email: String,
  email_recovery: String,
  userName: String,
  pe_people: [pe_people],
}
  type Query {
    hello: String
    GetAllUser: [pe_people]
  }
`;
export default typeDefs;