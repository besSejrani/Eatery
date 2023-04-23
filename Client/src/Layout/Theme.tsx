import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

// Variable font
import localFont from "@next/font/local";
const myInter = localFont({ src: "../app/fonts/Inter-VariableFont.ttf", preload: true });

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: myInter,
  },

  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#171717",
          },
          secondary: {
            // main: '#13b061'
            main: "#ffffff",
          },
          background: {
            body: "#f0f0f0",
            background: "#ffffff",

            icon: "#c4c4c4",
            footer: "#171717",
            header: "#171717",
            mark: "#01875F",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          sidebar: {
            title: "#01875F",
            active: "#171717",
            background: "#e3e3e3",
            links: grey[900],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#ffffff",
          },
          secondary: {
            main: "#13b061",
          },

          background: {
            // body: '#060606',
            body: "#1b1b1b",
            background: "#1b1b1b",
            paper: "#262626",
            icon: "#252525",
            button: "#ffffff",
            footer: "#171717",
            header: "#171717",
            mark: "#25d6a3",
          },

          text: {
            primary: "#ffffff",
            secondary: "#ffffff",
          },

          sidebar: {
            title: "#25d6a3",
            active: "#171717",
            background: "#ffffff",
            links: "#ffffff",
          },
        }),
  },
});

// =================================================================

export const Theme: React.FC<any> = ({ children, darkMode }) => {
  // ==============================
  //          State
  // ==============================

  // @ts-ignore
  const theme = createTheme(getDesignTokens(darkMode === "dark" ? "dark" : "light"));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const withTheme = (Component) => (props) =>
  (
    <Theme>
      <Component {...props} />
    </Theme>
  );
