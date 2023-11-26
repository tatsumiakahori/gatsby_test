import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import * as styles from "../styles/pages/top.styles.js"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <section css={styles.section_top}>
          <h1 css={styles.title}>test工務店のコーポレートサイトです。</h1>
          <p>
            私たちtest工務店は1961年の設立以来、ここ秩父に自然を活かした建設事業を展開してきました。
            <br />
            <br />
            現在では公共工事及び民間工事の基礎工事・造成・石積み・舗装などの請負、リサイクル工場での建設廃材の受入れ、
            <br />
            再生骨材の販売、生コンクリートの製造販売など、さまざまな業務を手がけています。
            <br />
            <br />
            これからも社員全員でこの仕事に誇りを持って取り組み、地域の暮らしの基盤を支え続けます。
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
