import { Container, Typography } from "@mui/material";
import DynamicContent from "components/DynamicContent"
import PageTop from "components/PageTop"
import Page from "layout/Page"
import { client } from "lib/api";
import { NextPage } from "next";
import { getArticle } from "queries/article";
import { wrapper } from "stores";
import { changeDescription, changeTitle } from "stores/slices/metaSlices";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { data } = await client.query({
      query: getArticle,
      variables: {
        slug: ctx.params?.article
      }
    });

    if(!data.articles.data.length) {
      return {
        notFound: true
      }
    }

    const article = data.articles.data[0].attributes;

    store.dispatch(changeTitle(article.meta?.title || ''))
    store.dispatch(changeDescription(article.meta?.description || ''))

    return {
      props: {
        article
      }
    };
  }
);

const Article: NextPage<{article: IArticlePage}> = ({article}) => {
  return (
    <Page>
      <PageTop 
        title={article.title} 
        imageUrl={article.image.data.attributes.url}
        smallTitle={article.smallTitile}
        content={article.content}
        cta={article.cta}
      />
      {article.components.map((item: any, idx: number) => <DynamicContent key={idx} data={item} />)}
    </Page>
  )
}

export default Article
