import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";

const Post = ({ data }: PageProps<Queries.PostQuery>) => {
  return (
    <Layout>
      <section className="section-layout">
        <h2 className="mb-5">{data.newtPost?.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: data.newtPost?.content + "" }}
        />
      </section>
    </Layout>
  );
};

export default Post;

export const Head: HeadFC<Queries.PostQuery> = ({ data }) => (
  <>
    <title>{data.newtPost?.title}</title>
    <meta name="description" content="投稿詳細ページです" />
  </>
);

export const query = graphql`
  query Post($id: String) {
    newtPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
