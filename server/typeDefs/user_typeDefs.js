const userTypeDef = `#graphql 

enum Gender{
    MALE
  FEMALE
  OTHER

}

type User{
    _id:ID!
    username:String!
    name:String!
    password:String!
    profilePicture:String
    gender:Gender!
    transactions:[Transaction]
}

type Query{
    users:[User],
    authUser:User
    user(id:ID!):User,

}

type Mutation{
    signUp(input:SignUpInput!):User
    login(input:LoginInput!):User
    logout:LogoutResponse
}

input SignUpInput{
    username:String!
    name:String!
    password:String!
    gender:Gender!
}

input LoginInput{
    username:String!
    password:String!
}

type LogoutResponse{
    message:String!
}

`;


export default userTypeDef;