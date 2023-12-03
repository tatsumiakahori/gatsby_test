import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const BlogList = ({ data }) => (
  <Layout>
    <section className="section-layout">
      <ul>
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <li key={node.blogId}>
            <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default BlogList;

export const query = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`;
