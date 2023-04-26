import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CryptoContext } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import { makeStyles } from "tss-react/mui";
import CoinInfo from "../components/CoinInfo";
import { Typography } from "@mui/material";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState("");

  const { currentCurrency, currentSymbol } = useContext(CryptoContext);

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  });

  const useStyles = makeStyles()((theme) => {
    return {
      container: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      },
      sidebar: {
        width: "30%",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        borderRight: "2px solid grey",
      },
      heading: {
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Montserrat",
      },
    };
  });
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image?.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {coin?.description?.en.split(". ")[0]}
        </Typography>
      </div>

      {/* chart */}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
