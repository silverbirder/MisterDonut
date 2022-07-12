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
    data: { getArticles: Articles },
  } = await client.query(myQuery).toPromise();
  return Articles.map((article: Article) => ({
    ...article,
    content: article.content,
  }));
};
