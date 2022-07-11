import Link from "next/link";
import Image from "next/image";
import { getArticles } from "../../apollo/getArticles";
import { Article } from "../../apollo/generated/graphql";

export default function Home({ articles }: any) {
  return (
    <ul>
      {articles.map((article: Article) => (
        <li key={article.id}>
          <div>{article.title}</div>
          <div>{article.content}</div>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const articles = await getArticles();
  return {
    props: {
      articles,
    },
  };
};
