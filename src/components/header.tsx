import * as React from "react";
import { Link } from "gatsby";
import type { PageProps } from "gatsby";
import * as styles from '../styles/components/header.module.scss';

const Header: React.FC<PageProps> = () => {
  return (
    <header className={`${styles.header} flex justify-between`}>
      <h1 className={`${styles.title} flex items-center`}>
        <Link to="/">test工務店</Link>
      </h1>
      <ul style={{display: "flex", justifyContent: 'space-between'}}>
        <li style={{margin: 10}}>
          <Link to="/">ホーム</Link>
        </li>
        <li style={{margin: 10}}>
          <Link to="/blog/allBlog">ブログ</Link>
        </li>
        <li style={{margin: 10}}>
          <Link to="/contact">お問い合わせ</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
