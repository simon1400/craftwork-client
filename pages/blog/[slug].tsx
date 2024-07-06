import DynamicContent from "components/DynamicContent";
import PageTop from "components/PageTop";
import Page from "layout/Page";
import { client } from "lib/api";
import { NextPage } from "next";
import { getPost } from "queries/blog";
import { wrapper } from "stores";
import { changeDescription, changeTitle } from "stores/slices/metaSlices";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { data } = await client.query({
      query: getPost,
      variables: {
        slug: ctx.params?.slug
      }
    });

    if(!data.posts.data.length) {
      return {
        notFound: true
      }
    }

    const post = data.posts.data[0].attributes;

    store.dispatch(changeTitle(post.meta?.title || ''))
    store.dispatch(changeDescription(post.meta?.description || ''))

    return {
      props: {
        post
      }
    };
  }
);

const Post: NextPage<{post: any}> = ({post}) => {
  return (
    <Page>
      <PageTop 
        title={post.title} 
        imageUrl={post.image.data.attributes.url}
        content={post.content}
      />
      {post.components.map((item: any, idx: number) => <DynamicContent key={idx} data={item} />)}
    </Page>
  )
}

export default Post