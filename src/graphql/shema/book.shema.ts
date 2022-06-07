import {gql} from "apollo-server-express"
const typeDefs = gql`
type User {
  cod_user : ID,
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  email_recovery: String,
  userName: String,
}
  type Query {
    hello: String
    GetAllUser: [User]
  }
`;
export default typeDefs;