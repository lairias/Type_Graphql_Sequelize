import db from '../../../models';
// import people from '../../../models/People/people';
// import Usuario from '../../../models/People/users';
const resolvers: any = {
    Query: {
      GetAllUser: async() => {
        const users = await db.pe_people.findAll(

        );
        // const users = await db.Usuario.findAll({
        //   include: [
        //    { model : db.people,
        //     as : 'pe_people'}
        //   ]
        // });
        return users;
      },
    }
  }
  export default resolvers;