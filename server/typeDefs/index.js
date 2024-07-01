import { mergeTypeDefs } from "@graphql-tools/merge";


import transactionTypeDefs from "./transaction_typeDefs.js";
import userTypeDef from "./user_typeDefs.js";


const mergedTypeDefs=mergeTypeDefs([transactionTypeDefs,userTypeDef]);



export default mergedTypeDefs;