import Usuario from '../../../models/People/users';
const resolvers: any = {
    Query: {
      GetAllUser: async() => {
        const users = await Usuario.findAll();
        return users;
      },
    }
  }
  export default resolvers;