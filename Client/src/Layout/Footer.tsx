import React from "react";

// Next
import Link from "next/link";

// React-Hook-Form
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// Material-UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Material Styles
import { makeStyles } from "@mui/styles";
import { Breakpoints } from "@mui/material";

// React-Icons
import { SiVisa, SiMastercard } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

// Request
import axios from "axios";

// =================================================================================================

type FormValues = {
  email: string;
};

const Footer = () => {
  const classes = useStyles();

  // ==============================
  //            Form
  // ==============================
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormValues>({
    criteriaMode: "all",
  });

  // ==============================
  //            Event
  // ==============================
  const onSubmit = async (form) => {
    await axios.post("/api/email/sendinblue", { email: form.email });

    reset({ email: "" });
  };

  return (
    <Box id="footer" component="footer" boxShadow={3} className={classes.root} sx={{ bgcolor: "background.footer" }}>
      <Container maxWidth="xl">
        <Box className={classes.footer}>
          <Box className={classes.footerHeader}>
            <Box>
              <Link passHref href="/" className={classes.logo}>
                <img src="EateryFooterLogo.svg" alt="logo" height={60} />
              </Link>
            </Box>

            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "This field is required",
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Box>
                    <TextField
                      type="email"
                      name="email"
                      id="subscribe"
                      label="Subscribe"
                      variant="outlined"
                      value={value}
                      onChange={onChange}
                      className={classes.inputEmail}
                      InputLabelProps={{ style: { color: "white" } }}
                      inputProps={{ className: classes.input }}
                      inputRef={ref}
                    />

                    {errors ? (
                      <ErrorMessage
                        errors={errors}
                        name={name}
                        as={
                          <Typography
                            style={{
                              color: "white",
                              margin: "5px 0px 0px 3px",
                            }}
                            variant="body2"
                          />
                        }
                      />
                    ) : null}
                  </Box>
                )}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{ color: "text.newsletter" }}
                className={classes.formSubmit}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
        <Divider style={{ backgroundColor: "#b8b8b8" }} />

        <Box className={classes.footerContent}>
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
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px" }}>
              Social
            </Typography>

            <Link href="/policies/confidentiality">
              <Typography variant="body1" className={classes.footerLink}>
                Instagram
              </Typography>
            </Link>

            <Link href="/policies/terms">
              <Typography variant="body1" className={classes.footerLink}>
                Linkedin
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
          <Typography variant="body2" className={classes.copyright}>
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
    bottom: 0,
    boxShadow: "rgb(0 0 0 / 50%) 0px 0px 10px 0px",
    [theme.breakpoints.down("sm")]: {
      height: "420px",
    },
  },

  logo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  linkLogo: {
    color: "white",
    margin: "0px 0px 0px 5px",
  },

  linkGroup: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },

  linkHeading: {
    color: "#dfdfdf",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },

  link: {
    padding: "2px 0px",
    color: "#afafaf",
    cursor: "pointer",
    margin: "0px 0px 0px 0px",
  },

  footer: {
    height: "130px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerLink: {
    color: "white",
    margin: "5px 0px 0px 0px",
    cursor: "pointer",
  },

  footerHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  form: {
    display: "flex",
  },

  inputEmail: {
    backgroundColor: "#212121",
    border: "1px solid black",
    borderRadius: "10px 0px 0px 10px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  input: {
    color: "white",
  },

  formSubmit: {
    width: 100,
    height: 58,
    border: "1px solid black",
    backgroundColor: "#000",
    borderRadius: "0px 10px 10px 0px",
  },

  footerContent: {
    display: "grid",
    gridTemplateColumns: " 2fr 2fr 2fr 1fr",
    margin: "35px 0px",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  footerCredentials: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0px 10px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "start",
    },
  },

  copyright: {
    color: "#afafaf",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0px 0px 0px",
    },
  },
}));
