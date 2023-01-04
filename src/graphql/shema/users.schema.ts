import {gql} from "apollo-server-express"
import db from '../../../models';

const typeDefs = gql`
type User {
  cod_user : ID,
  email: String,
  email_recovery: String,
  userName: String,
  pe_people: [pe_people],
}
`
const resolvers = {
  Query:{
    GetAllUser: async() => {
      const users = await db.pe_people.findAll(
      );
      return users;
    }
  }
}