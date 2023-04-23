import React, { useState } from "react";

// Styles
import "../App/index.css";

//Next
import { AppProps } from "next/app";

// Layout
import Layout from "../Layout";
import { Theme } from "../Layout/Theme";

// Variable font
import localFont from "@next/font/local";

// SSR
import withApollo from "../Apollo/ssr";

// Cookie
import { getCookie, setCookies } from "cookies-next";

import { ui } from "../Apollo/state/ui/index";

//===================================================================================

const myInter = localFont({
  src: "../App/fonts/Inter-VariableFont.ttf",
  preload: true,
  weight: "100 900",
});

const App = ({ Component, pageProps, router }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<string>(pageProps.colorScheme);

  const toggleColorScheme = (value) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);

    ui({
      ...ui(),
      isDarkMode: nextColorScheme,
    });

    setCookies("darkMode", nextColorScheme, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: true,
    });
  };

  return (
    <div className={myInter.className}>
      <Theme darkMode={colorScheme}>
        <Layout {...pageProps} {...{ gdpr: pageProps.gdpr }} action={toggleColorScheme} darkModeState={colorScheme}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Theme>
    </div>
  );
};
//@ts-ignore
export default withApollo({ ssr: true })(App);

// ========================================================================================================

App.getInitialProps = ({ ctx }) => {
  return { pageProps: { colorScheme: getCookie("darkMode", ctx) || "n " } };
};
