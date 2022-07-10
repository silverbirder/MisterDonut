import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Article {
    id: Int
    title: String
    content: String
  }

  type Query {
    getArticle(id: Int): Article
    getArticles: [Article]
  }
`;
