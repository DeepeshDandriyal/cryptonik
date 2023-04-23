import React, { useContext, useEffect, useState } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { CryptoContext } from "../CryptoContext";
import {
  Container,
  LinearProgress,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setsearch] = useState("");
  const { currentCurrency } = useContext(CryptoContext);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currentCurrency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currentCurrency]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices By Market Cap
        </Typography>
        <TextField
          label="search for crypto currency..."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setsearch(e.target.value)}
        />
        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    key={head}
                    align={head === "coin" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableHead>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
