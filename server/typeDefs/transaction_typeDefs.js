const transactionTypeDefs=`#graphql 

type Transaction{
    _id:ID!
    userId:ID!
    description:String!
    paymentType:String!
    amount:Float!
    category:String!
    date:String!
    location:String

}

type Query{
    transactions:[Transaction]
    transaction(id:ID!):Transaction
}

type Mutation{
    createTransaction(input:CreateTransaction!):Transaction
    updateTransaction(input:UpdateTransaction!):Transaction
    # deleteTransaction(id:ID!):DeleteTransactionResponse
}

input CreateTransaction{
    userId:ID!
    description:String!
    paymentType:String!
    amount:Float!
    category:String!
    date:String!
    location:String
}

input UpdateTransaction{
    _id:ID!
    description:String
    paymentType:String
    amount:Float
    category:String
    date:String
    location:String


}



`

export default transactionTypeDefs