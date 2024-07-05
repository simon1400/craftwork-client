import { Container } from "@mui/material";
import PageTop from "components/PageTop"
import SwitchContent from "components/SwitchContent";
import Page from "layout/Page"
import { client } from "lib/api";
import { NextPage } from "next";
import {blogPageQuery, postsQuery} from "queries/blog";
import { wrapper } from "stores";
import { changeDescription, changeTitle } from "stores/slices/metaSlices";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { data } = await client.query({
      query: blogPageQuery,
    });
    
    const { data: dataPosts } = await client.query({
      query: postsQuery,
    });

    const blog = data.blogPage.data.attributes;
    const posts = dataPosts.posts.data.map((item: any) => item.attributes)

    store.dispatch(changeTitle(blog.meta?.title || 'Blog'))
    store.dispatch(changeDescription(blog.meta?.description || ''))

    return {
      props: {
        blog,
        posts
      }
    };
  }
);

const Blog: NextPage<{blog: any, posts: any}> = ({
  blog,
  posts
}) => {
  return (
    <Page>
      <PageTop 
        title={blog.title} 
        imageUrl={blog.image.data.attributes.url} 
        smallTitle={blog?.description}
      />
      {posts && <Container>
        <SwitchContent posts={posts} />
      </Container>}
    </Page>
  )
}

export default Blog