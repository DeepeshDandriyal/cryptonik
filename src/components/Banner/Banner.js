import { Container, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import Carousel from "./Carousel";

const Banner = () => {
  const useStyles = makeStyles()(() => {
    return {
      banner: {
        backgroundImage: "url(./banner2.jpg)",
      },
      bannerContext: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
    };
  });
  const { classes } = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContext}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Cryptonik
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "lightgray",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get All the Information Regarding your favourite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
