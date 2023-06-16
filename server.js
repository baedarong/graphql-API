import { ApolloServer } from "apollo-server";
import { tweets, users } from "./database.js";
import { typeDefs } from "./types.js";
import fetch from "node-fetch";

// [JS Logic] return data from database
const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allUsers() {
      return users;
    },
    async allMovies() {
      const response = await fetch(
        "https://yts.torrentbay.to/api/v2/list_movies.json"
      );
      const json = await response.json();
      return json.data.movies;
    },
    async movie(root, { id }) {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      return json.data.movie;
    },
  },
  Mutation: {
    postTweet(_, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text: text,
        userId: userId,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, { tweetId }) {
      const tweet = tweets.find((tweet) => tweet.id === tweetId);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== tweetId);
      return true;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      const tweetAuthor = users.find((user) => user.id === userId);
      if (!tweetAuthor) return null;
      return tweetAuthor;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
