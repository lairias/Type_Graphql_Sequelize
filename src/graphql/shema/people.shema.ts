import {gql} from "apollo-server-express"
import db from '../../../models';

export const typeDefs = gql`
type pe_people {
  cod_people: ID,
  cod_user: ID,
  firstName: String,
  middleName: String,
  lastName: String,
  photoProfile: String,
  photoBackground: String,
  gender: String,
  age: Int,
  birthDate: String,
  createdAtPeople: String,
  updatedAtPeople: String,
}
type Query {
    GetAllUser:[pe_people]
}
`
export const resolvers = {
  Query:{
    GetAllUser: async() => {
      const users = await db.pe_people.findAll(
      );
      return users;
    }
  }
}