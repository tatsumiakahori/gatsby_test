import * as React from "react";
import { Link } from "gatsby";
import type { PageProps } from "gatsby";

const Header: React.FC<PageProps> = () => {
  return (
    <header style={{display: "flex", justifyContent: 'space-between'}}>
      <h1>
        <Link to="/">marumaru工務店</Link>
      </h1>
      <ul style={{display: "flex", justifyContent: 'space-between'}}>
        <li style={{margin: 10}}>
          <Link to="/">ホーム</Link>
        </li>
        <li style={{margin: 10}}>
          <Link to="/blog">ブログ</Link>
        </li>
        <li style={{margin: 10}}>
          <Link to="/company">会社情報</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
