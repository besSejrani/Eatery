import React from "react";

// Next
import Link from "next/link";

// Material-UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Material Styles
import { makeStyles } from "@mui/styles";
import { Breakpoints } from "@mui/material";

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter, BsYoutube } from "react-icons/bs";

// React-Icons
import { SiVisa, SiMastercard } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

// =================================================================================================

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component={"footer"} boxShadow={3} className={classes.root}>
      <Container maxWidth="xl" className={classes.footer}>
        <Divider style={{ backgroundColor: "#b8b8b8" }} />

        <Box className={classes.footerContent}>
          <Box className={classes.logo}>
            <Link href="/">
              <img
                src="/EateryFooterLogo.svg"
                alt="Eatery Logo"
                style={{ margin: "0px 10px 20px 0px" }}
                width={140}
                height={60}
              />
            </Link>
            <Typography variant="body1" style={{ color: "white" }}>
              Enjoy tastful meals.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px" }}>
              Links
            </Typography>

            <Link href="/meals">
              <Typography variant="body1" className={classes.footerLink}>
                Meals
              </Typography>
            </Link>

            <Link href="/menus">
              <Typography variant="body1" className={classes.footerLink}>
                Menus
              </Typography>
            </Link>

            <Link href="/contact">
              <Typography variant="body1" className={classes.footerLink}>
                Contact
              </Typography>
            </Link>
          </Box>

          <Box>
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px" }}>
              Legal
            </Typography>

            <Link href="/policies/confidentiality">
              <Typography variant="body1" className={classes.footerLink}>
                Confidentiality Policy
              </Typography>
            </Link>

            <Link href="/policies/terms">
              <Typography variant="body1" className={classes.footerLink}>
                Terms &#38; Services
              </Typography>
            </Link>

            <Link href="/policies/return">
              <Typography variant="body1" className={classes.footerLink}>
                Return Policy
              </Typography>
            </Link>
          </Box>

          <Box>
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px", textAlign: "center" }}>
              Payment
            </Typography>

            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <SiVisa color={"#ffffff"} size={40} />
              <Box style={{ width: "10px" }}> </Box>
              <SiMastercard color={"#ffffff"} size={40} />
              <Box style={{ width: "10px" }}> </Box>
              <FaStripe color={"#ffffff"} size={40} />
            </Box>
          </Box>
        </Box>
        <Divider style={{ backgroundColor: "#b8b8b8" }} />
        <Box className={classes.footerCredentials}>
          <Typography variant="body2" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} Eatery, all rights reserved.
          </Typography>

          <Link passHref href="https://besjan-sejrani.com">
            <Typography variant="body2" className={classes.copyright}>
              <Box component={"span"} style={{ display: "flex", alignItems: "center" }}>
                Made with love by Besjan Sejrani
              </Box>
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

// =================================================================

interface MyTheme {
  breakpoints: Breakpoints;
}

const useStyles = makeStyles((theme: MyTheme) => ({
  root: {
    marginTop: "calc(1% + 40px)",
    bottom: 0,
    backgroundColor: "#212121",
    boxShadow: "rgb(0 0 0 / 50%) 0px 0px 10px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  copyright: {
    color: "#afafaf",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0px 0px 0px",
    },
  },

  footer: {
    margin: "50px 0px 0px 0px",
  },

  footerLink: {
    color: "white",
    margin: "5px 0px 0px 0px",
    cursor: "pointer",
  },

  logo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
  },

  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    margin: "35px 25px 35px 0px",
  },
  footerCredentials: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
