import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideDrawerCart from "./SideDrawerCart";
import Tab from "./Tab";

// Theme
import { withTheme } from "./Theme";

//===================================================================================

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideDrawerCart />
      {children}
      <Footer />
      <Tab />
    </>
  );
};

export default withTheme(Layout);
