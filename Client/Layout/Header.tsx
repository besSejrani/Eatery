import React from "react";

// Next
import Link from "next/link";

// Material-UI
import {
  AppBar,
  Badge,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Container,
  useScrollTrigger,
  Slide,
  Box,
  Hidden,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Apollo State
import { ui } from "@Apollo/state/UI/index";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/ShoppingCart";

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

const Header = () => {
  const classes = useStyles();

  const changeCart = () => {
    ui({ ...ui(), isCartOpen: true });
  };

  return (
    <header className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Container>
            <Toolbar disableGutters style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* <Hidden smUp> */}
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                {/* </Hidden> */}

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

                {/* <Hidden smDown> */}
                <Link href="/meals">
                  <Typography variant="body1" className={classes.link}>
                    Meals
                  </Typography>
                </Link>
                <Link href="/menus">
                  <Typography variant="body1" className={classes.link}>
                    Menus
                  </Typography>
                </Link>
                <Link href="/contact">
                  <Typography variant="body1" className={classes.link}>
                    Contact
                  </Typography>
                </Link>
                {/* </Hidden> */}
              </Box>

              <Box>
                <IconButton color="inherit">
                  <SearchIcon className="nav-icon" />
                </IconButton>

                <IconButton color="inherit" onClick={() => changeCart()}>
                  <StyledBadge
                    // badgeContent={selectProducts}
                    color="secondary"
                    overlap="circular"
                  >
                    <CartIcon className="nav-icon" />
                  </StyledBadge>
                </IconButton>
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "64px",
      position: "relative",
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
