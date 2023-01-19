import { ApolloServer, gql } from "apollo-server";

// shape of the data
// schema definion language
const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    firstName: String
    lastName: String
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String!, userID: ID!): Tweet!
    deleteTweet(tweetId: ID!): Boolean!
  }
`;

// restAPI라면?
// GET /allTweets (query)
// POST PUT DELETE /tweet/:tweetId (mutation)

const server = new ApolloServer({ typeDefs });
server.listen().then(({ url }) => {
  console.log(`running on the ${url}`);
});
