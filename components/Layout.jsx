import React from "react";
import Head from "next/head";
/* import { H } from "Xilis/xili-sanity/dist/static/sanity-5a622376"; */
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>XileXili</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
