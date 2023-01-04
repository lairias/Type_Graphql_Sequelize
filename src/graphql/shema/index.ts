import {gql} from "apollo-server-express"
import { typeDefs as DefsPeople,resolvers as ResolverPeople } from "./people.shema";
const rootTypeDefs = gql`
  type Query {
    hola:String
  }
`;
export const resolvers = [
  ResolverPeople
]
export  const typeDefs = [rootTypeDefs,DefsPeople]