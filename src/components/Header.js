import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CryptoContext } from "../CryptoContext";

const Header = () => {
  const useStyles = makeStyles()(() => {
    return {
      title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        cursor: "pointer",
        fontWeight: "bold",
      },
    };
  });
  const { classes } = useStyles();

  const { currentCurrency, setCurrency, setSymbol, currentSymbol } =
    useContext(CryptoContext);
  console.log(currentCurrency);
  console.log(currentSymbol);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Link to={"/"} style={{ flex: 1 }}>
              <Typography className={classes.title} variant="h6">
                Cryptonik
              </Typography>
            </Link>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currentCurrency}
              onChange={(e) => {
                setCurrency(e.target.value);
                // fault here rectify later
                if (currentCurrency === "USD") {
                  setSymbol("₹");
                } else {
                  setSymbol("$");
                }
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
