import React from "react";

// Next
import Link from "next/link";

// Material-UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";

// Material Styles
import { makeStyles, withStyles, createStyles } from "@mui/styles";
import { Breakpoints } from "@mui/material";

// Material Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "@mui/icons-material/ShoppingBasketOutlined";

import { BiMenu } from "react-icons/bi";
import { IoMoonOutline } from "react-icons/io5";
import { BsSun, BsBasket } from "react-icons/bs";

// Components
import Language from "@Components/Menus/Language";
import ButtonHeaderAction from "@Components/Buttons/ButtonHeaderAction";

// Apollo State
import { useReactiveVar } from "@apollo/client";
import { ui } from "../Apollo/state/ui/index";

// ========================================================================================================

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = ({ Action, darkModeState }) => {
  const classes = useStyles();

  const changeCart = () => {
    ui({ ...ui(), isCartOpen: true });
  };

  const changeSideBar = () => {
    ui({ ...ui(), isSideBarOpen: true });
  };

  return (
    <header className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link href="/">
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      width={100}
                      height={40}
                      style={{ margin: "0px 10px 0px 0px" }}
                      src="eatery.svg"
                      alt="Eatery Logo"
                    />
                  </Box>
                </Link>

                <Box sx={{ display: { xs: "none", sx: "none", md: "block" } }}>
                  <Box style={{ display: "flex" }}>
                    <Link href="/meals">
                      <Typography variant="body1" className={classes.link} sx={{ color: "text.header" }}>
                        Meals
                      </Typography>
                    </Link>
                    <Link href="/menus">
                      <Typography variant="body1" className={classes.link} sx={{ color: "text.header" }}>
                        Menus
                      </Typography>
                    </Link>
                    <Link href="/contact">
                      <Typography variant="body1" className={classes.link} sx={{ color: "text.header" }}>
                        Contact
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box>
                <ButtonHeaderAction action={() => Action()}>
                  {darkModeState === "dark" ? (
                    <BsSun style={{ fontSize: "18px" }} />
                  ) : (
                    <IoMoonOutline style={{ fontSize: "18px" }} />
                  )}
                </ButtonHeaderAction>

                <ButtonHeaderAction>
                  <Language />
                </ButtonHeaderAction>

                <ButtonHeaderAction action={() => changeCart()}>
                  <StyledBadge
                    // badgeContent={selectProducts}
                    color="secondary"
                    overlap="circular"
                  >
                    <BsBasket style={{ fontSize: "18px" }} />
                  </StyledBadge>
                </ButtonHeaderAction>

                <ButtonHeaderAction action={changeSideBar} sx={{ display: { xl: "none", lg: "none", md: "none" } }}>
                  <BiMenu style={{ fontSize: "20px" }} />
                </ButtonHeaderAction>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

export default Header;

// =================================================================

interface MyTheme {
  breakpoints: Breakpoints;
}

const useStyles = makeStyles((theme: MyTheme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "64px",
      position: "relative",
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
      color: "white",
      marginRight: "20px",
    },
    link: {
      cursor: "pointer",
      marginLeft: "15px",
      fontWeight: 500,
      textTransform: "capitalize",
      color: "white",
    },
  }),
);

// =================================================================

const StyledBadge = withStyles(() =>
  createStyles({
    badge: {
      right: 0,
      width: 20,
      height: 18,
      padding: "0px 11px",
    },
  }),
)(Badge);
