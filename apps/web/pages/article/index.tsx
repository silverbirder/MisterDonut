import ArticleList from "../../components/article-list";
import Donut from "../../components/Donut";

export default function Home() {
  return (
    <>
      <ArticleList />
      <Donut />
    </>
  );
}

// export const getStaticProps = async () => {
//   // const getArticlesResult = await getArticles();
//   // return {
//   //   props: {
//   //     getArticles: getArticlesResult?.getArticles,
//   //   },
//   // };
// };
