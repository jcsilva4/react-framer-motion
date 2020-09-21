import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Layout/Main"
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
