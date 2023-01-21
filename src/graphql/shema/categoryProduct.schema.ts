import {gql} from "apollo-server-express"
import db from '../../../models';

export const typeDefs = gql`
 type pro_categoria {
    cod_category: ID,
    nam_category: String,
    des_category: String,
    inv_category: Int,
    photo_categorytegory:String,
    createdAtCategory: String,
    updatedAtCategory: String,
}
 type photo? {
    cod_category: ID,
    nam_category: String,
    des_category: String,
    inv_category: Int,
    photo_categorytegory:String,
    createdAtCategory: String,
    updatedAtCategory: String,
}

type Query {
    GetAllCategory:[pro_categoria]
}
`;

export const resolvers = {
  Query:{
    GetAllCategory: async() => {
      const product = await db.pro_categoria.findAll(
      );
      return product;
    },
  },
}