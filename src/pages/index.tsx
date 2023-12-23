import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import * as styles from "../styles/pages/top.styles.js";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <section className="text-center m-20">
          <h1 className="text-8xl font-extrabold">
            This is the
            <span className="text-8xl"> TEST SITE</span>.
          </h1>
          <div className="h-0.5 bg-black mt-2"></div>
          <p className="p-10">
            Since our establishment in 1961,
            <br />
            we at Test Construction have been developing a construction business
            <br />
            that takes advantage of nature here in Chichibu.
            <br />
            <br />
            Currently, we are contracting out foundation work, land preparation,
            masonry, paving, etc.
            <br />
            for public and private works, accepting construction waste materials
            at recycling plants,
            <br />
            We engage in a variety of operations, including the sale of recycled
            aggregate and
            <br />
            the manufacture and sale of ready-mixed concrete.
            <br />
            <br />
            All of our employees will continue to take pride in this work and
            continue to support the foundations of local life.
            <br />
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
