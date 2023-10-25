import autoprefixer from "autoprefixer";
import React from "react";
import { markAsUntransferable } from "worker_threads";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div style={{ padding: 100 }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
