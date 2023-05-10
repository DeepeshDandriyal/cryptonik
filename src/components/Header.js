import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CryptoContext } from "../CryptoContext";
import logo from "../assets/Brand-logo4.png";

const Header = () => {
  const useStyles = makeStyles()(() => {
    return {
      img: {
        flex: 1,
        cursor: "pointer",
        width: 150,
        height: 50,
        marginTop: 7,
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
              <img className={classes.img} src={logo} alt="Cryptonik" />
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
