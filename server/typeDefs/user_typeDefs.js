const userTypeDef = `#graphql 

enum Gender{
  MALE
  FEMALE
  OTHER

}

type User{
    _id:ID!
    username:String!
    email:String!
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
    # signUp(input:SignUpInput!):User
    # login(input:LoginInput!):User
    # logout:LogoutResponse

    signUp(username:String!,email:String!,password:String!,gender:String!):User
    login(email:String!,password:String!):User
    logout:String
}

# input SignUpInput{
#     username:String!
#     email:String!
#     password:String!
#     gender:Gender!
# }

# input LoginInput{
#     email:String!
#     password:String!
# }

# type LogoutResponse{
#     message:String!
# }

`;


export default userTypeDef;