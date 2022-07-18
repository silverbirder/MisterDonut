import {
  Article,
  MyQuery,
  MyQueryQuery,
} from "../graphql-client/generated/graphql";
import { useQuery } from "urql";

const ArticleList = () => {
  const [result, reexecuteQuery] = useQuery<MyQueryQuery>({
    query: MyQuery,
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data?.getArticles?.map((article: Article | null) => (
        <li key={article?.id}>
          <div>{article?.title}</div>
          <div>{article?.content}</div>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
