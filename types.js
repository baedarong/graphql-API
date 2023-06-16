import { gql } from "apollo-server";

// [SDL] schema definion language
export const typeDefs = gql`
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    allUsers: [User!]!
    allMovies: [Movie!]!
    movie(id: ID!): Movie
  }
  type Mutation {
    """
    posting a new tweet with text and userId
    """
    postTweet(text: String!, userId: ID!): Tweet
    """
    Deletes a Tweet if found, else returns false
    """
    deleteTweet(tweetId: ID!): Boolean!
  }
  """
  User object represents a resource for a User
  """
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName + lastName as a string
    """
    fullName: String
  }
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }

  type Torrents {
    url: String
    hash: String
    quality: String
    type: String
    seeds: Int
    peers: Int
    size: String
    size_bytes: Int
    date_uploaded: String
    date_uploaded_unix: Int
  }

  type Movie {
    id: Int!
    url: String
    imdb_code: String
    title: String!
    title_english: String
    title_long: String
    slug: String
    year: Int!
    rating: Float
    runtime: Int!
    summary: String
    description_full: String
    synopsis: String
    yt_trailer_code: String
    language: String!
    mpa_rating: String
    background_image: String
    background_image_original: String
    small_cover_image: String
    medium_cover_image: String
    large_cover_image: String
    state: String!
    date_uploaded: String
    date_uploaded_unix: Int
    torrents: [Torrents]
    genres: [String]!
  }
`;
