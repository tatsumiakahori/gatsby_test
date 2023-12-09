import * as React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";

const AllBlog = ({ data }: PageProps<Queries.AllPostsQuery>) => {
  return (
    <Layout>
      <section className="section-layout">
        <h1 className="mb-5">ブログ一覧</h1>
        <ul>
          {data.allNewtPost.edges.map((edge) => (
            <li key={edge.node._id} className="text-blue-500 underline">
              <Link to={`/blog/${edge.node._id}`}>{edge.node.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default AllBlog;

export const Head: HeadFC = () => (
  <>
    <title>Newt・Gatsbyブログ</title>
    <meta name="description" content="NewtとGatsbyを利用したブログです" />
  </>
);

export const query = graphql`
  query AllPosts {
    allNewtPost {
      edges {
        node {
          _id
          title
          content
        }
      }
    }
  }
`;
