import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { TrendingCoins } from "../../config/api";
import { CryptoContext } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currentCurrency } = useContext(CryptoContext);
  const useStyles = makeStyles()(() => {
    return {
      carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
    };
  });
  const { classes } = useStyles();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currentCurrency));
    setTrending(data);
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, [currentCurrency]);

  const items = trending.map((coin) => {
    return (
      <Link className="classes.carouselItem" to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        ></img>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
