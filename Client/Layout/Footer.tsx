import React from "react";

// Next
import Link from "next/link";

// Material-UI
import { Box, Container, Typography, IconButton, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Icons
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";

// React-Icons
import { SiVisa, SiMastercard } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

// =================================================================================================

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component={"footer"} boxShadow={3} className={classes.root}>
      <Container className={classes.footer}>
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
            &copy; {new Date().getFullYear()}, all rights reserved.
          </Typography>

          <Box>
            <IconButton>
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <InstagramIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <YoutubeIcon style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

// =================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "calc(1% + 40px)",
      bottom: 0,
      backgroundColor: "#212121",
      boxShadow: "rgb(0 0 0 / 50%) 0px 0px 10px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
  }),
);
