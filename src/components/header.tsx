import * as React from "react";
import { Link } from "gatsby";
import type { PageProps } from "gatsby";
import * as styles from '../styles/components/header.module.scss';

const Header: React.FC<PageProps> = () => {
  return (
    <header className="flex justify-between px-4">
      <h1 className="flex items-center italic font-extrabold text-orange-600">
        <Link to="/" className="text-xl">TEST SITE</Link>
      </h1>
      <ul style={{display: "flex", justifyContent: 'space-between'}}>
        <li style={{margin: 10}}>
          <Link to="/">home</Link>
        </li>
        <li style={{margin: 10}}>
          <Link to="/blog/allBlog">blog</Link>
        </li>
        <li style={{margin: 10}}>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
