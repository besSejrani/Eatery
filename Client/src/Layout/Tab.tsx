import React from "react";

// Next
import Link from "next/link";

// Material-UI
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

// Material Styles
import { makeStyles } from "@mui/styles";
import { Breakpoints } from "@mui/material";

// Icons
import HomeIcon from "@mui/icons-material/HomeOutlined";
import FastfoodIcon from "@mui/icons-material/FastfoodOutlined";
import PhoneIcon from "@mui/icons-material/PhoneEnabledOutlined";
import RestaurantIcon from "@mui/icons-material/RestaurantMenuOutlined";

//===================================================================================

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const TabNavigation = () => {
  const classes = useStyles();

  // ==============================
  //            State
  // ==============================
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const HideOnScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="up" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <HideOnScroll>
      <BottomNavigation className={classes.root} showLabels sx={{ display: { xl: "none", lg: "none", md: "none" } }}>
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
    </HideOnScroll>
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
