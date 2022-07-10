import { client } from "./client";
import { Article } from "./generated/graphql";
const myQuery = `
  query myQuery {
    getArticles {
      id
      title
      content
    }
  }
`;

export const getArticles = async (): Promise<Article[]> => {
  const {
    data: { articles },
  } = await client.query(myQuery).toPromise();
  return articles.map((article: Article) => ({
    ...article,
    content: article.content,
  }));
};
