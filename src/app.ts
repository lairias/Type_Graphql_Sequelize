import express,{Application} from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graphql/shema/book.shema';
import resolvers from './graphql/resolvers/users.resolvers';
class Servidor {
    private app: Application;
    private server : any;
    private port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.server = new ApolloServer({
            typeDefs,
            resolvers,
            context: ({req}) => ({req})
        });
        this.ApolloServer();

    }
    async ApolloServer(){
        await  this.server.start().then(()=>{
            console.log(`server is running on ${this.server.graphqlPath}`);
        });
        await this.server.applyMiddleware({app:this.app});
    }
    Listen(){
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
}

export default Servidor;