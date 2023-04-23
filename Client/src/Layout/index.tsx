import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideDrawerCart from "./SideDrawerCart";
import Tab from "./Tab";

// Material-UI
import Box from "@mui/material/Box";

//===================================================================================

const Layout = ({ children, action, darkModeState }) => {
  return (
    <Box sx={{ backgroundColor: "background.body" }}>
      <Header Action={action} darkModeState={darkModeState} />
      <SideDrawerCart />
      {children}
      <Footer />
      <Tab />
    </Box>
  );
};

export default Layout;
