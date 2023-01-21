import {gql} from "apollo-server-express"
import { typeDefs as DefsPeople,resolvers as ResolverPeople } from "./people.schema";
import { typeDefs as DefsUser,resolvers as ResolverUser } from "./users.schema";
import { typeDefs as DefsProduct,resolvers as ResolverProduct } from "./product.schema";
import { typeDefs as DefsCategoryProduct,resolvers as ResolverCategoryProduct } from "./categoryProduct.schema";

const rootTypeDefs = gql`
   type Query {
    _:String
  }
`;
export const resolvers = [
  ResolverPeople,
  ResolverUser,
  ResolverProduct,
  ResolverCategoryProduct]

export  const typeDefs = [
  rootTypeDefs,
  DefsPeople,
  DefsUser,
  DefsProduct,
  DefsCategoryProduct
]