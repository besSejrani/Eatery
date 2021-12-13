import React from "react";

// Material-UI
import { Hidden, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Next
import Link from "next/link";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PhoneIcon from "@material-ui/icons/Phone";
import RestaurantIcon from "@material-ui/icons/Restaurant";

//===================================================================================

const TabNavigation = () => {
  const classes = useStyles();

  return (
    <Hidden only={["sm", "md", "lg", "xl"]}>
      <BottomNavigation className={classes.root} showLabels>
        <BottomNavigationAction component={Link} href="/" label="Home" icon={<HomeIcon />} />

        <BottomNavigationAction
          component={Link}
          href="/meals"
          icon={<FastfoodIcon />}
          label="Meals"
          style={{ width: "100%" }}
        />
        <BottomNavigationAction
          component={Link}
          href="/menus"
          label="Menus"
          icon={<RestaurantIcon />}
          style={{ width: "100%" }}
        />
        <BottomNavigationAction
          component={Link}
          href="/contact"
          label="Contact"
          icon={<PhoneIcon />}
          style={{ width: "100%" }}
        />
      </BottomNavigation>
    </Hidden>
  );
};

export default TabNavigation;

//===================================================================================

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#212121",
  },
}));
