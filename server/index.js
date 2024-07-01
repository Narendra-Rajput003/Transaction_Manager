import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import http from 'http';
import express from 'express';

import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js"
import {dbConnect} from "./config/db_config.js"
const app=express();

const httpServer = http.createServer(app);

const server=new ApolloServer({
    typeDefs:mergedTypeDefs,
    resolvers:mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start();

app.use(
    '/',
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
    // context function provides the request object to the Apollo server context
    expressMiddleware(server, {
      context: async ({ req }) => (req),
    }),
  );

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
dbConnect

console.log(`🚀 Server ready at http://localhost:4000/`);
