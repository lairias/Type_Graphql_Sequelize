import db from '../../../models';
// import people from '../../../models/People/people';
// import Usuario from '../../../models/People/users';
const resolvers: any = {
    Query: {
      GetAllUser: async() => {
        const users = await db.pe_people.findAll(
          );
        return users;
      },
    }
  }
  export default resolvers;