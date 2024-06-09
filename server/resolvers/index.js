import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user_resolvers.js";
import transactionResolver from "./transaction_resolver.js";


const mergedResolvers=mergeResolvers([userResolver,transactionResolver]);


export default mergedResolvers;