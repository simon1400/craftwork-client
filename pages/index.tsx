import { Container, Typography } from "@mui/material";
import DynamicContent from "components/DynamicContent";
import PageTop from "components/PageTop";
import Page from "layout/Page";
import { client } from "lib/api";
import { NextPage } from "next";
import homepageQuery from "queries/homepage";
import { wrapper } from "stores";
import { changeDescription, changeTitle } from "stores/slices/metaSlices";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { data } = await client.query({
      query: homepageQuery,
    });

    const homepage = data.homepage.data.attributes;

    store.dispatch(changeTitle(homepage.meta?.title || 'Úvod'))
    store.dispatch(changeDescription(homepage.meta?.description || ''))

    return {
      props: {
        homepage
      }
    };
  }
);

const Homepage: NextPage<{ homepage: IHomepage }> = ({ homepage }) => {
  return (
    <Page>
      <PageTop
        title={homepage.title}
        imageUrl={homepage.image.data.attributes.url}
      />
      <Container maxWidth="md">
        <Typography
          textAlign="center"
          component="div"
          marginTop={12}
          marginBottom={12}
          dangerouslySetInnerHTML={{ __html: homepage.content }}
        />
      </Container>
      {homepage.Components.map((item: any, idx: number) => <DynamicContent key={idx} data={item} />)}
    </Page>
  );
};

export default Homepage;
