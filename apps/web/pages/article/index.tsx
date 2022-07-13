import { getArticles } from "../../graphql-client/getArticles";
import { Article, MyQueryQuery } from "../../graphql-client/generated/graphql";

export default function Home({ getArticles }: MyQueryQuery) {
  return (
    <ul>
      {getArticles?.map((article: Article | null) => (
        <li key={article?.id}>
          <div>{article?.title}</div>
          <div>{article?.content}</div>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const getArticlesResult = await getArticles();
  return {
    props: {
      getArticles: getArticlesResult?.getArticles,
    },
  };
};
