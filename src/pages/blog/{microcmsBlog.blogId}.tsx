import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <section className="section-layout">
        <span>{data.microcmsBlog.createdAt}</span>
        <h1>{data.microcmsBlog.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.microcmsBlog.content}`,
          }}
        />
      </section>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query ($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      content
      createdAt
      title
    }
  }
`;
